<<<<<<< HEAD
var app = angular.module('fakefruit', []);
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
=======
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
>>>>>>> origin/master
