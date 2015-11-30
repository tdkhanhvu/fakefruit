(function () {

    var app = angular.module("fakefruit");
    
//     angular.module('myApp')
//   .controller('myController', [
//       '$scope', function ($scope) {
//           $scope.myModel = {
//               Url: 'http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx',
//               Name: "AngularJS directives for social sharing buttons - Facebook, Google+, Twitter and Pinterest | Jason Watmore's Blog",
//               ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
//           };
//       }
//   ]);

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
                
            // alert($location.absUrl());
            var _url = $location.absUrl();
            $scope.myModel = {
                Url: _url,
                Name: "AngularJS directives for social sharing buttons - Facebook, Google+, Twitter and Pinterest | Jason Watmore's Blog",
                ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
            };
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

