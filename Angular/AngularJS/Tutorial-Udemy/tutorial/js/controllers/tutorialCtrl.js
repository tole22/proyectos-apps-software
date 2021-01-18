
angular.module('tutorialCtrlModule', [])

.controller('TutorialCtrl', ['$scope', 'Calculations', function($scope, Calculations){

    $scope.tutorialObject = {};
    $scope.tutorialObject.title = "Main Page";
    $scope.tutorialObject.subTitle = "Sub title";

    $scope.tutorialObject.bindOutput = 2;

    $scope.tutorialObject.firstname = "Thomas";
    $scope.tutorialObject.lastname = "Brown";

    $scope.timesTwo = function() {
        $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
    }
}])

.controller('TutorialCtrl2', ['$scope', function($scope){

    $scope.secondTutorial = 'This is the second tuorial';
    
}])

.factory('Calculations', function() {
    var calculations = {};
    calculations.timesTwo = function(a) {
        return a*2;
    };

    return calculations;
})

