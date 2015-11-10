var host = 'http://localhost:8080/',
    imagePath = host + 'assets/image/',
    iconPath = host + 'assets/icon/';
(function () {

    var app = angular.module("fakefruit");

    var MainController = function ($scope, $http) {
        $scope.selectedFruit = undefined;
        $scope.selectedType = undefined;

        $scope.searchFruit = function () {
            $scope.selectedType = undefined;
            console.log('searchFruit');
            console.log('search for ' + $scope.selectedFruit.id);
            $http.get(host + 'searchFruit/' + $scope.selectedFruit.id)
                .then(function (response) {
                    console.log(response.data);

                    $scope.types = response.data;

                    $scope.types.forEach(function (type) {
                        type['icon'] = iconPath + type['icon'];
                    });

                    if ($scope.types.length == 1) {
                        $scope.selectedType = $scope.types[0];
                        $scope.searchType();
                    }
                });
        };

        $scope.searchType = function () {
            console.log('searchType');
            $http.get(host + 'searchType/' + $scope.selectedFruit.id + '/' +
                    $scope.selectedType.id)
                .then(function (response) {
                    console.log(response.data);

                    $scope.origins = response.data.origins;
                    $scope.attributes = processType(response.data);

                    $scope.origins.forEach(function (origin) {
                        origin['image'] = imagePath + origin['image'];
                        origin['visible'] = true;
                    })
                });
            //$location.path("/user/" + username);
        };

        $scope.showTable = function () {
            if (!$scope.origins || !$scope.selectedType) {
                return false;
            }

            var visibleExist = false;
            $scope.origins.forEach(function (origin) {
                if (origin.visible) {
                    visibleExist = true;
                }
            });
            return visibleExist;
        };

        $http.get(host + 'getAllFruits')
            .then(function (response) {
                console.log(response.data);
                $scope.fruits = response.data.fruits;
                $scope.attributeGroups = response.data.attributeGroups;

                $scope.fruits.forEach(function (fruit) {
                    fruit['icon'] = iconPath + fruit['icon'];
                });
            });

        var processType = function (type) {
            var origins = type.origins,
                count = {},
                result = [];

            $scope.attributeGroups.forEach(function (attributeGroup) {
                attributeGroup.attributes.forEach(function (attribute) {
                    count[attribute.id] = 0;
                });
            });

            console.log('---------------------------------');
            console.log(count);
            console.log('---------------------------------');

            origins.forEach(function (origin) {
                for (var point in origin.description) {
                    if (origin[point] != '')
                        count[point] += 1;
                }
            });

            console.log('---------------------------------');
            console.log(count);
            console.log('---------------------------------');

            $scope.attributeGroups.forEach(function (attributeGroup) {
                var attributes = attributeGroup.attributes,
                    startAttribute = null,
                    rowCount = 0,
                    temp = [];

                for (var i = 0; i < attributes.length; i++) {
                    var attribute = attributes[i];

                    if (count[attribute.id] != 0) {
                        if (startAttribute == null)
                            startAttribute = attribute;
                        else
                            temp.push({'group': '', 'class': attributeGroup.class,
                                'id': attribute.Id, 'name': attribute.name, 'rows': 0});
                        rowCount++;
                    }
                }
                if (startAttribute != null)
                    result.push({'group': attributeGroup.name, 'class': attributeGroup.class, 'id': startAttribute.id,
                        'name': startAttribute.name, 'rows': rowCount});

                if (temp.length)
                    result.push.apply(result, temp);
            });

            console.log('---------------------------------');
            console.log(result);
            console.log('---------------------------------');


            return result;
        };
    };

    app.controller("MainController", MainController);

})();

