(function() {
    var app = angular.module('angular-tutorial');
    app.controller('MovieCtrl', ['$scope', function($scope){
        $scope.title = 'Lista de Peliculas';
        $scope.movies = [
            {title: 'The GrandFather', year: '1994'},
            {title: 'Shark', year: '1996'},
            {title: 'The Simpsons', year: '2004'},
            {title: 'True Life', year: '1984'},
        ];
        $scope.newMovie = {title: '', year: ''};
        $scope.addMovie = function() {
            $scope.movies.push(angular.copy($scope.newMovie));
        }
    }]);
})();