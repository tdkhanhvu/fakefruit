(function () {

    var app = angular.module("fakefruit");

    var QuizController = function ($scope, $http, $interval, FruitService) {
        $scope.selectedFruit = undefined;
        $scope.selectedType = undefined;
        $scope.countdown = 0;
        $scope.questionLeft = 0;

//        var countdownInterval = null;
//        var startCountDown = function(){
//            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
//        };

        $scope.submitAnswer = function(id){
//            $scope.countdown -= 1;

            if (id != '') {
                $scope.answer = id == $scope.question.originId ? 'correct': 'incorrect';
            } else
                $scope.questionLeft = $scope.questions.length;

            if ($scope.questions.length != 0)
                $scope.question = $scope.questions.splice(randomIntFromInterval(0,
                    $scope.questions.length - 1), 1)[0];
            $scope.questionLeft--;

//            if ($scope.countdown < 1){
//                $scope.question = $scope.questions.splice(randomIntFromInterval(0,
//                    $scope.questions.length - 1), 1)[0];
//                if ($scope.questions.length == 0)
//                    $interval.cancel(countdownInterval);
//                else
//                    $scope.countdown = 5;
//            }
        };

        var onGetAllFruits = function (data) {
            $scope.fruits = data;
        };

        var onSearchFruit = function (data) {
            $scope.types = data;

            if ($scope.types.length == 1) {
                $scope.selectedType = $scope.types[0];
                $scope.searchType();
            }
        };

        var onSearchType = function (data) {
            $scope.origins = data.origins;
            $scope.attributes = data.attributes;
            $scope.questions = [];

            $scope.attributes.forEach(function (attribute) {
                var validAttributes = [],
                    attrId = attribute.id;

                $scope.origins.forEach(function (origin) {
                    if (typeof(origin.description[attrId]) != undefined &&
                        origin.description[attrId] != undefined)
                        validAttributes.push({'originId': origin.id, 'originName': origin.name,
                            'content': origin.description[attrId]});
                });

                var index = randomIntFromInterval(0, validAttributes.length - 1),
                    question = validAttributes[index];

                question['attributeName'] = attribute.name;

                $scope.questions.push(question);
            });
            $scope.submitAnswer('');
//            startCountDown();
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        $scope.searchFruit = function () {
            $scope.selectedType = undefined;

            FruitService.searchFruit($scope.selectedFruit.id)
                .then(onSearchFruit, onError);
        };

        $scope.searchType = function () {
            FruitService.searchType($scope.selectedFruit.id, $scope.selectedType.id)
                .then(onSearchType, onError);
        };

        $scope.showTable = function () {
            if (!$scope.origins || !$scope.selectedType) {
                return false;
            }

            var visibleExist = false;
            $scope.origins.forEach(function (origin) {
                if (origin.visible) {
                    visibleExist = true;
                }
            });
            return visibleExist;
        };

        FruitService.getAllFruits()
            .then(onGetAllFruits, onError);
    };

    function randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    app.controller("QuizController", QuizController);
})();

