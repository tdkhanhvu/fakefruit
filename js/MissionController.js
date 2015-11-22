(function () {

    var app = angular.module("fakefruit");

    var MissionController = function ($scope, FruitService) {
        $scope.getImage = function(imageName) {
            var path = FruitService.getStaticImage(imageName);

            return path;
        }
    };

    app.controller("MissionController", MissionController);
})();

