var app = angular.module('BookWorm', ['ngRoute', 'firebase', 'jkuri.gallery']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    })
    .when('/results/:Results', {
        templateUrl: 'pages/results.html',
        controller: 'ResultsController'
    })
    .when('/specificBook', {
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
