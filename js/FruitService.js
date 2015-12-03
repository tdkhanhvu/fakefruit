(function(){
    var FruitService = function($http, $routeParams, $location) {
        var host = 'http://'+ window.location.hostname+'/',
            fruitPath = host + 'assets/fruit/',
            iconPath = host + 'assets/icon/',
            flagPath = host + 'assets/flag/',
            imagePath = host + 'assets/image/',
            attributeGroups = null;

        var getAttributeGroups = function () {
            var url = host + 'getAttributeGroups';
            console.log(url);

            return $http.get(url)
                .then(function (response) {
                    attributeGroups = response.data;
                });
        };

        var getAllFruits = function() {
            var url = host + 'getAllFruits';
            console.log(url);

            return $http.get(url)
                .then(function (response) {
                    var fruits = response.data;

                    fruits.forEach(function (fruit) {
                        fruit['icon'] = iconPath + fruit['icon'];
                    });

                    return fruits;
                });
        };

        var onGetAllFruits = function($scope, data) {
            $scope.fruits = data;
            if (typeof($routeParams.fruit) != 'undefined') {
                $scope.fruits.forEach(function(fruit){
                    if ($routeParams.fruit == fruit.id) {
                        $scope.selectedFruit = fruit;

                        $scope.searchFruit();
                    }
                });
            }
        };

        var getStaticImage = function(imageName) {
            return imagePath + imageName;
        };

        var getCurrentUrl = function() {
            return $location.absUrl().replace('/#','');
        }

        var searchFruit = function (fruitId, $scope) {
            var url = host + 'searchFruit/' + fruitId;
            console.log(url);

            return $http.get(url)
                .then(function (response) {
                    var types = response.data;

                    types.forEach(function (type) {
                        type['icon'] = iconPath + type['icon'];
                    });

                    return types;
                });
        };

        var onSearchFruit = function($scope, data, page){
            $scope.types = data;
            $location.path('/' + page, false)
                .search('fruit', $scope.selectedFruit.id)
                .search('type', null);
            var _url = $location.absUrl();
            $scope.myModel = {
                Url: _url
            };
            if ($scope.types.length == 1) {
                $scope.selectedType = $scope.types[0];
                $scope.searchType();
            } else if (typeof($routeParams.type) != 'undefined') {
                $scope.types.forEach(function(type){
                    if ($routeParams.type == type.id) {
                        $scope.selectedType = type;

                        $scope.searchType();
                    }
                });
            }
        };

        var searchType = function (fruitId, typeId, $scope, $location) {
            var url = host + 'searchType/' + fruitId + '/' + typeId;
            console.log(url);

            return $http.get(url)
                .then(function (response) {
                    var origins = response.data.origins,
                        attributes = processType(response.data);

                    origins.forEach(function (origin) {
                        origin['image'] = fruitPath + origin['image'];
                        origin['flag'] = flagPath + origin['flag'];
                        origin['visible'] = true;
                    });

                    return {'origins': origins, 'attributes': attributes};
                });
        };

        var processType = function (type) {
            var origins = type.origins,
                count = {},
                result = [];

            //set count of each possible attribute in the group to be 0
            attributeGroups.forEach(function (attributeGroup) {
                attributeGroup.attributes.forEach(function (attribute) {
                    count[attribute.id] = 0;
                });
            });

            //count the number of occurrences for each attribute
            origins.forEach(function (origin) {
                for (var point in origin.description) {
                    if (origin.description.hasOwnProperty(point) &&
                        origin.description[point] != '') {
                        count[point]++;
                    }
                }
            });

            attributeGroups.forEach(function (attributeGroup) {
                var attributes = attributeGroup.attributes,
                    startAttribute = null,
                    rowCount = 0,
                    temp = [];

                for (var i = 0; i < attributes.length; i++) {
                    var attribute = attributes[i];

                    if (count[attribute.id] != 0) {
                        //the attribute row that shows attribute group name
                        if (startAttribute == null)
                            startAttribute = attribute;
                        else
                            temp.push({'group': '', 'class': attributeGroup.class,
                                'id': attribute.id, 'name': attribute.name, 'rows': 0});
                        rowCount++;
                    }
                }

                //number of row span by attribute group name cell = number
                //of attributes exist in origin
                if (startAttribute != null)
                    result.push({'group': attributeGroup.name, 'class': attributeGroup.class, 'id': startAttribute.id,
                        'name': startAttribute.name, 'rows': rowCount});

                if (temp.length)
                    result.push.apply(result, temp);
            });

            return result;
        };

        getAttributeGroups();

        return {
            getAllFruits: getAllFruits,
            getAttributeGroups: getAttributeGroups,
            searchFruit: searchFruit,
            searchType: searchType,
            getStaticImage: getStaticImage,
            getCurrentUrl: getCurrentUrl,
            onGetAllFruits: onGetAllFruits,
            onSearchFruit: onSearchFruit
        };
    };

    var module = angular.module("fakefruit");
    module.factory("FruitService", FruitService);
}());