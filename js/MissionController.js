(function () {

    var app = angular.module("fakefruit");

    var MissionController = function ($scope, FruitService) {
        $scope.getImage = function(imageName) {
            var path = FruitService.getStaticImage(imageName);

            console.log(path);
            return path;
        }
    };

    app.controller("MissionController", MissionController);
})();

