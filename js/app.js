(function(){
    var app = angular.module('fakefruit', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'ui.select']);

    app.controller('login', function($scope) {
        $scope.usr = "Username";
        $scope.pwd = "Password";
        $scope.lgn = "Login";
    });

    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "UserController"
            })
            .otherwise({redirectTo:"/main"});
    });
}());