var app = angular.module('BookWorm', ['ngRoute', 'firebase', 'ngResource']);
app.config(function ($routeProvider, $resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    })
    .when('/results/:Results', {
        templateUrl: 'pages/results.html',
        controller: 'ResultsController'
    })
    .when('/specificBook/:bookId', {
        templateUrl: 'pages/specificBook.html',
        controller: 'specificBookController'
    })
    .when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'LoginController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
