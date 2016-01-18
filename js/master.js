var app = angular.module('BookWorm', ['ngRoute', 'firebase']);
app.config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
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
