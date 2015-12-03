(function () {

    var app = angular.module("fakefruit");

    var QuizController = function ($scope, $http, $interval, $timeout,
                                    $location, FruitService) {
        $scope.selectedFruit = undefined;
        $scope.selectedType = undefined;
        $scope.disabled = false;

        $scope.startQuiz = function() {
            $scope.percentComplete = 0;
            $scope.questionAnswer = 0;
            $scope.questionTotal = $scope.questions.length;
            $scope.questionCorrect = 0;
            $scope.questionIncorrect = 0;

            $scope.nextQuestion();
        };

        $scope.nextQuestion = function(){
            if ($scope.timer != null)
                $timeout.cancel($scope.timer);

            $scope.answer = '';
            $scope.answerId = null;
            $scope.question = null;

            if ($scope.questions.length != 0) {
                $scope.question = $scope.questions.splice(randomIntFromInterval(0,
                    $scope.questions.length - 1), 1)[0];

                $scope.questionAnswer++;
                $scope.disabled = false;
            }
        };

        $scope.submitAnswer = function(id){
            $scope.disabled = true;
            if ($scope.question != null) {
                $scope.submitId = id;
                $scope.answerId = $scope.question.originId;
                $scope.percentComplete = Math.floor( ($scope.questionAnswer* 1.0
                    / $scope.questionTotal) * 100);

                if (id == $scope.answerId) {
                    $scope.answer = 'correct';
                    $scope.questionCorrect++;
                } else {
                    $scope.answer = 'incorrect';
                    $scope.questionIncorrect++;
                }

                $scope.timer = $timeout($scope.nextQuestion,10000);
            }
        };

        var onGetAllFruits = function(data){
            FruitService.onGetAllFruits($scope, data);
        }

        var onSearchFruit = function(data){
            FruitService.onSearchFruit($scope, data, 'quiz');
        };

        var onSearchType = function (data) {
            $scope.origins = data.origins;
            $scope.attributes = data.attributes;
            $scope.questions = [];

            $location.path('/quiz', false).search('fruit', $scope.selectedFruit.id)
                .search('type', $scope.selectedType.id);

            $scope.myModel = {
                Url: FruitService.getCurrentUrl()
            };

            $scope.attributes.forEach(function (attribute) {
                var validAttributes = [],
                    attrId = attribute.id;

                $scope.origins.forEach(function (origin) {
                    if (typeof(origin.description[attrId]) != undefined &&
                        origin.description[attrId] != undefined)
                        validAttributes.push({'originId': origin.id, 'originName': origin.name,
                            'content': origin.description[attrId], 'flag': origin.flag});
                });

                var index = randomIntFromInterval(0, validAttributes.length - 1),
                    question = validAttributes[index];

                question['attributeName'] = attribute.name;
                question.details = validAttributes;
                $scope.questions.push(question);
            });
            $scope.startQuiz();
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

