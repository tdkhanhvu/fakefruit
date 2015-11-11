(function(){
    var FruitService = function($http) {
        var host = 'http://localhost:8080/',
            imagePath = host + 'assets/image/',
            iconPath = host + 'assets/icon/',
            attributeGroups = null;

        $http.get(host + 'getAttributeGroups')
            .then(function (response) {
                console.log(response.data);
                attributeGroups = response.data;
            });

        var searchFruit = function (fruitId) {
            console.log('searchFruit');
            console.log('search for ' + fruitId);
            return $http.get(host + 'searchFruit/' + fruitId)
                .then(function (response) {
                    console.log(response.data);

                    var types = response.data;

                    types.forEach(function (type) {
                        type['icon'] = iconPath + type['icon'];
                    });

                    return types;
                });
        };

        var searchType = function (fruitId, typeId) {
            console.log('searchType');
            return $http.get(host + 'searchType/' + fruitId + '/' + typeId)
                .then(function (response) {
                    console.log(response.data);

                    var origins = response.data.origins,
                        attributes = processType(response.data);

                    origins.forEach(function (origin) {
                        origin['image'] = imagePath + origin['image'];
                        origin['visible'] = true;
                    })

                    return {'origins': origins, 'attributes': attributes};
                });
        };

        var getAllFruits = function() {
            return $http.get(host + 'getAllFruits')
                .then(function (response) {
                    console.log(response.data);
                    var fruits = response.data;

                    fruits.forEach(function (fruit) {
                        fruit['icon'] = iconPath + fruit['icon'];
                    });

                    return fruits;
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
                    if (origin[point] != '')
                        count[point] += 1;
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

        return {
            getAllFruits: getAllFruits,
            searchFruit: searchFruit,
            searchType: searchType
        };
    };

    var module = angular.module("fakefruit");
    module.factory("FruitService", FruitService);
}());