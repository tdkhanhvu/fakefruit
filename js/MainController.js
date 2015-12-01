(function () {

    var app = angular.module("fakefruit");

    var MainController = function ($scope, $http, $location, FruitService) {
        $scope.selectedFruit = undefined;
        $scope.selectedType = undefined;

        var onGetAllFruits = function(data){
            FruitService.onGetAllFruits($scope, data);
        }

        var onSearchFruit = function(data){
            FruitService.onSearchFruit($scope, data, 'main');
        };

        var onSearchType = function(data) {
            $scope.origins = data.origins;
            $scope.attributes = data.attributes;

            $location.path('/main', false).search('fruit', $scope.selectedFruit.id)
                .search('type', $scope.selectedType.id);
            var _url = $location.absUrl();
            $scope.myModel.Url = _url;
            console.log('get new url, searchType:' + $scope.myModel.Url);
            //$scope.$apply();
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        $scope.searchFruit = function () {
            $scope.selectedType = undefined;

            FruitService.searchFruit($scope.selectedFruit.id, $scope)
                .then(onSearchFruit, onError);
        };

        $scope.searchType = function () {
            FruitService.searchType($scope.selectedFruit.id, $scope.selectedType.id, $scope, $location)
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

