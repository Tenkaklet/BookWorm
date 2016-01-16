var app = angular.module('BookWorm')

.controller('HomeController', ['$scope', '$http','$timeout', '$location','getBook', function ($scope, $http, $timeout, $location, getBook) {
    $scope.featuredBook = 'philosphy';
    getBook.findBook($scope.featuredBook)
    .then(function (response) {
        $scope.books = response.items;
        console.log($scope.books);
        


    });

    $scope.bookSearch = function () {
        console.log($scope.bookTitle);
        getBook.findBook($scope.bookTitle)
        .then(function(response) {
            var bookData = response;
            console.log(bookData);
        });
        $location.path('/results/' + $scope.bookTitle);
    };
}])
.controller('ResultsController', ['$scope', '$http','$timeout', '$location','getBook','$routeParams', function ($scope, $http, $timeout, $location, getBook, $routeParams) {

}])

.controller('specificBookController', ['$scope', '$http','$timeout', '$location','getBook','$routeParams',function ($scope, $http, $timeout, $location, getBook, $routeParams) {
    console.log($routeParams.book);
    getBook.findBook($routeParams.book)
    .then(function (response) {
        console.log(response.items[0]);
    });
}])

.controller('LoginController', ['$scope', '$http','$timeout', '$location','getBook', function ($scope, $http, $timeout, $location, getBook) {

}]);
