
var app = angular.module('groceryListApp', ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/Views/groceryList.html',
            controller: 'GroceryListItemsController'
        })
        .when('/addItem', {
            templateUrl: '/Views/addItem.html',
            controller: 'GroceryListItemsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('HomeController', ['$scope', function($scope) {
    $scope.apptitle = 'Grocery List';
}]);

app.controller('GroceryListItemsController', ['$scope', function($scope) {
    $scope.groceryItems = [
        {completed: true, itemName: 'milk', date: '2020-10-01'},
        {completed: true, itemName: 'cookie', date: '2020-10-01'},
        {completed: true, itemName: 'icre-cream', date: '2020-10-01'},
        {completed: true, itemName: 'tomato', date: '2020-10-01'},
        {completed: true, itemName: 'potato', date: '2020-10-01'},
        {completed: true, itemName: 'snacks', date: '2020-10-01'},
        {completed: true, itemName: 'pencil', date: '2020-10-01'},
    ];
}]);

