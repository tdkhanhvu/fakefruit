(function(){
    var app = angular.module('fakefruit', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'ui.select']);

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
        console.log('--------ROUTE-----------');
        //console.log($location.path);
        $routeProvider
            .when("/mission", {
                templateUrl: "mission.html",
                controller: "MissionController"
            })
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/quiz", {
                templateUrl: "quiz.html",
                controller: "QuizController"
            })
            .otherwise({redirectTo:"/main"});
    });
}());