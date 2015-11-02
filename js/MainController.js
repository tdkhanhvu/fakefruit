var host = 'http://localhost:8080/',
    imagePath = host + 'assets/image/';
(function(){

    var app = angular.module("fakefruit");

    var MainController = function($scope, $http) {
        $scope.search = function(fruit) {
            console.log('search for ' + fruit);
            $http.get(host + 'search/' + fruit)
                .then(function(response){
                    $scope.origins = response.data.origins;

                    $scope.origins.forEach(function(origin) {
                        origin['image'] = imagePath + origin['image'];
                        origin['visible'] = true;
                    })
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