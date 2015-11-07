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
                    $scope.attributes = [];

                    for (var attribute in $scope.origins[0].description) {
                        $scope.attributes.push(attribute);
                    }

                    $scope.origins.forEach(function(origin) {
                        origin['image'] = imagePath + origin['image'];
                        origin['visible'] = true;
                    })
                    console.log(response.data);
                });
            //$location.path("/user/" + username);
        };

        $scope.showTable = function() {
            if (!$scope.origins) {
                return false;
            }

            visibleExist = false;
            $scope.origins.forEach(function(origin){
               if (origin.visible) {
                   visibleExist = true;
               }
            });
            return visibleExist;
        };

        $http.get(host + 'getAllFruits')
            .then(function(response){
                console.log(response.data);
                $scope.fruits = response.data;

//                $("#searchFruit").select2({
//                    placeholder: 'Chọn Trái Cây'//,
//                    //data: response.data
//                });
            });
    };

    app.controller("MainController", MainController);
})();