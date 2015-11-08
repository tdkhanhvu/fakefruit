var host = 'http://localhost:8080/',
    imagePath = host + 'assets/image/',
    iconPath = host + 'assets/icon/';
(function(){

    var app = angular.module("fakefruit");

    var MainController = function($scope, $http) {
        $scope.selectedFruit = undefined;
        $scope.selectedType = undefined;

        $scope.$watch('item', function() {
            console.log('hey, myVar has changed!');
            console.log($scope.item);
        });

        $scope.searchFruit = function() {
            $scope.selectedType = undefined;
            console.log('searchFruit');
            console.log('search for ' + $scope.selectedFruit.id);
            $http.get(host + 'searchFruit/' + $scope.selectedFruit.id)
                .then(function(response){
                    console.log(response.data);

                    $scope.types = response.data;
                    $scope.attributes = [];
                });
        };

        $scope.searchType = function() {
            console.log('searchType');
            $http.get(host + 'searchType/' + $scope.selectedFruit.id + '/' +
                    $scope.selectedType.id )
                .then(function(response){
                    console.log(response.data);

                    $scope.origins = response.data.origins;
                    $scope.attributes = [];

                    for (var attribute in $scope.origins[0].description) {
                        $scope.attributes.push(attribute);
                    }

                    $scope.origins.forEach(function(origin) {
                        origin['image'] = imagePath + origin['image'];
                        origin['visible'] = true;
                    })
                });
            //$location.path("/user/" + username);
        };

        $scope.showTable = function() {
            if (!$scope.origins || !$scope.selectedType) {
                return false;
            }

            var visibleExist = false;
            $scope.origins.forEach(function(origin){
               if (origin.visible) {
                   visibleExist = true;
               }
            });
            return visibleExist;
        };

        $http.get(host + 'getAllFruits')
            .then(function(response){
                console.log(response.data);
                $scope.fruits = response.data;

                $scope.fruits.forEach(function(fruit) {
                    fruit['icon'] = iconPath + fruit['icon'];
                });
            });
    };

    app.controller("MainController", MainController);
})();