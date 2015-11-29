(function(){
    // var app = angular.module('fakefruit', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'ui.select']);
    var app = angular.module('fakefruit', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'ui.select', 'angulike']).run([
        '$rootScope', function ($rootScope) {
            $rootScope.facebookAppId = '195462110792239'; // set your facebook app id here
        }
    ])
    
    // app.controller('MainController', [
    //     '$scope', function ($scope) {
    //         var _url = location.href;
    //         $scope.myModel = {
    //             Url: _url,
    //             Name: "XXXX",
    //             ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
    //         };
    //     }
    // ]);

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