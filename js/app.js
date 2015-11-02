var app = angular.module('fakefruit', []);
app.controller('login', function($scope) {
    $scope.usr = "Username";
    $scope.pwd = "Password";
    $scope.lgn = "Login";
});