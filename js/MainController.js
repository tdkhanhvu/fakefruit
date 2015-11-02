var host = 'http://localhost:8080/';
(function(){

    var app = angular.module("fakefruit");

    var MainController = function($scope, $http) {
//        var decrementCountdown = function(){
//            $scope.countdown -= 1;
//            if ($scope.countdown < 1){
//                $scope.search($scope.username);
//            }
//        };
//
//        var countdownInterval = null;
//        var startCountDown = function(){
//            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
//        };
//
        $scope.search = function(fruit) {
            console.log(fruit);
            $http.get(host + 'search/' + fruit)
                .then(function(response){
                    console.log(response.data);
                });
            //$location.path("/user/" + username);
        };

        $http.get(host + 'getAllFruits')
            .then(function(response){
                console.log(response.data);
                $scope.fruits = response.data;
                $("#searchFruit").select2({
                    placeholder: 'Chọn Trái Cây'//,
                    //data: response.data
                });
            });
    };

    app.controller("MainController", MainController);
})();