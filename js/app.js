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