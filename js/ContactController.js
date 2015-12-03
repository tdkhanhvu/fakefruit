(function () {

    var app = angular.module("fakefruit");

    var ContactController = function ($scope, FruitService) {
        $scope.myModel = {
            Url: FruitService.getCurrentUrl()
        };

        $scope.getImage = function(imageName) {
            var path = FruitService.getStaticImage(imageName);
            return path;
        }
    };

    app.controller("ContactController", ContactController);
})();

