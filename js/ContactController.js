(function () {

    var app = angular.module("fakefruit");

    var ContactController = function ($scope, FruitService, $location) {
        $scope.myModel = {
            Url: $location.absUrl()
        };

        $scope.getImage = function(imageName) {
            var path = FruitService.getStaticImage(imageName);
            return path;
        }
    };

    app.controller("ContactController", ContactController);
})();

