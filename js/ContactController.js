(function () {

    var app = angular.module("fakefruit");

    var ContactController = function ($scope, FruitService) {
        $scope.myModel = {
            Url: FruitService.getCurrentUrl()
        };

        $scope.name = '';
        $scope.nameClass = '';

        $scope.email = '';
        $scope.emailClass = '';

        $scope.position = '';
        $scope.positionClass = '';

        $scope.comment = '';
        $scope.submitted = false;

        $scope.getImage = function(imageName) {
            var path = FruitService.getStaticImage(imageName);
            return path;
        }

        $scope.submitForm = function() {
            isError = false;
            if ($scope.name == '') {
                isError = true;
                $scope.nameClass = 'has-error';
            }
            else
                $scope.nameClass = 'has-success';

            if ($scope.email == '' || ! validateEmail($scope.email)) {
                isError = true;
                $scope.emailClass = 'has-error';
            }
            else
                $scope.emailClass = 'has-success';

            if ($scope.position == '') {
                isError = true;
                $scope.positionClass = 'has-error';
            }
            else
                $scope.positionClass = 'has-success';

            if ( !isError) {
                FruitService.register($scope.name, $scope.email,
                    $scope.position, $scope.comment);
                $scope.submitted = true;
            }
        }

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    };

    app.controller("ContactController", ContactController);
})();