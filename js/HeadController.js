(function () {

    var app = angular.module("fakefruit");

    var HeadController = function ($scope, $location, FruitService) {
        $scope.getImage = function(imageName) {
            var path = FruitService.getStaticImage(imageName);

            console.log(path);
            return path;
        };

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    };

    app.controller("HeadController", HeadController);
})();

