
var app = angular.module('tutorialApp', ['ngRoute','tutorialCtrlModule', ]);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/Views/tutorial.html',
            controller: 'TutorialCtrl'
        })
        .when('/tutorialSecond', {
            templateUrl: '/Views/tutorialSecond.html',
            controller: 'TutorialCtrl2'
        })
        .otherwise({
            redirectTo: '/'
        });
})