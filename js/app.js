(function(){
    // var app = angular.module('fakefruit', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'ui.select']);
    var app = angular.module('fakefruit', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'ui.select', 'angulike']).run([
        '$rootScope', function ($rootScope) {
            $rootScope.facebookAppId = '195462110792239'; // set your facebook app id here
        }
    ]);

    app.controller('login', function($scope, $http) {
        $scope.usr = "Username";
        $scope.pwd = "Password";
        $scope.lgn = "Login";

        $http.get("http://www.w3schools.com/angular/customers.php")
        .success(function(response) {
            $scope.names = response.records;
        });
    });
    app.config(function($routeProvider, $locationProvider){
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
                controller: "MainController",
                reloadOnSearch: false
            })
            .when("/quiz", {
                templateUrl: "quiz.html",
                controller: "QuizController",
                reloadOnSearch: false
            })
            .otherwise({redirectTo:"/mission"});

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });

    app.directive('fruitSelection', function(){
        return {
            restrict: 'E',
            templateUrl: './templates/fruit-selection.html'
        };
    }).directive('typeSelection', function(){
        return {
            restrict: 'E',
            templateUrl: './templates/type-selection.html'
        };
    }).directive('originSelection', function(){
        return {
            restrict: 'E',
            templateUrl: './templates/origin-selection.html'
        };
    }).directive('facebookShare', function(){
        return {
            restrict: 'E',
            templateUrl: './templates/facebook-share.html'
        };
    });
}());