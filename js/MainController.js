(function () {

    var app = angular.module("fakefruit");

    var MainController = function ($scope, $http, $routeParams, FruitService) {
        $scope.selectedFruit = undefined;
        $scope.selectedType = undefined;

        var onGetAllFruits = function(data) {
            $scope.fruits = data;

            if (typeof($routeParams.fruit) != undefined) {
                $scope.fruits.forEach(function(fruit){
                    if ($routeParams.fruit == fruit.id) {
                        $scope.selectedFruit = fruit;

                        $scope.searchFruit();
                    }
                });
            }
        };

        var onSearchFruit = function(data){
            $scope.types = data;

            if ($scope.types.length == 1) {
                $scope.selectedType = $scope.types[0];
                $scope.searchType();
            } else if (typeof($routeParams.type) != undefined) {
                $scope.types.forEach(function(type){
                    if ($routeParams.type == type.id) {
                        $scope.selectedType = type;

                        $scope.searchType();
                    }
                });
            }
        };

        var onSearchType = function(data) {
            $scope.origins = data.origins;
            $scope.attributes = data.attributes;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        $scope.searchFruit = function () {
            $scope.selectedType = undefined;

            FruitService.searchFruit($scope.selectedFruit.id)
                .then(onSearchFruit, onError);
        };

        $scope.searchType = function () {
            FruitService.searchType($scope.selectedFruit.id, $scope.selectedType.id)
                .then(onSearchType, onError);
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

        FruitService.getAllFruits()
            .then(onGetAllFruits, onError);
    };

    app.controller("MainController", MainController);
})();

