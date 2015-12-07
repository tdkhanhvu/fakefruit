(function () {

    var app = angular.module("fakefruit");

    var ContactController = function ($scope, FruitService) {
        $scope.myModel = {
            Url: FruitService.getCurrentUrl()
        };

        $scope.name = '';
        $scope.email = '';
        $scope.position = '';
        $scope.comment = '';
        $scope.submitted = false;

        $scope.getImage = function(imageName) {
            var path = FruitService.getStaticImage(imageName);
            return path;
        }

        $scope.submitForm = function() {
            $scope.submitted = true;
        }
    };

    app.controller("ContactController", ContactController);
})();