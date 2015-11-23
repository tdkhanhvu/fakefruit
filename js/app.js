(function(){
    var app = angular.module('fakefruit', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'ui.select', 'angulike']);
    // angular.module('myApp', ['angulike']);

    app.controller('login', function($scope, $http) {
        $scope.usr = "Username";
        $scope.pwd = "Password";
        $scope.lgn = "Login";

        $http.get("http://www.w3schools.com/angular/customers.php")
        .success(function(response) {
            $scope.names = response.records;
            console.log($scope.names);
        });
    });
    app.config(function($routeProvider){
        $routeProvider
            .when("/mission", {
                templateUrl: "mission.html",
                controller: "MissionController"
            })
            .when("/contact", {
                templateUrl: "contact.html",
                controller: "ContactController"
            })
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/quiz", {
                templateUrl: "quiz.html",
                controller: "QuizController"
            })
            .otherwise({redirectTo:"/mission"});
    });

    app.directive('fruitSelection', function(){
        return {
            restrict: 'E',
            templateUrl: './templates/fruit-selection.html'
        };
    });

    app.directive('typeSelection', function(){
        return {
            restrict: 'E',
            templateUrl: './templates/type-selection.html'
        };
    });

    app.directive('originSelection', function(){
        return {
            restrict: 'E',
            templateUrl: './templates/origin-selection.html'
        };
    });
}());