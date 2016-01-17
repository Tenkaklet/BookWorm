var app = angular.module('BookWorm')

.controller('HomeController', ['$scope', '$http','$timeout', '$location','getBook', function ($scope, $http, $timeout, $location, getBook) {

    $scope.featuredBook = 'Anarchism';
    getBook.findBook($scope.featuredBook)
    .then(function (response) {
        $scope.books = response.items;
        console.log($scope.books);
    });
    $timeout(function () {
        $scope.bookShowCase = true;
    }, 1000);



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
.controller('ResultsController', ['$scope', '$http','$timeout', '$location','getBook','$routeParams','getID' ,function ($scope, $http, $timeout, $location, getBook, $routeParams, getID) {
    console.log($routeParams.Results);
    getBook.findBook($routeParams.Results)
    .then(function (response) {
        var bookData = response.items;
        $scope.books = bookData;
        console.log(bookData);
        angular.forEach($scope.books, function (item) {
            var bookId = item.id;
            console.warn(bookId);
            getID.findbookId(bookId)
            .then(function (response) {
                console.log(response);
                bookSpecificData = response;
                $scope.overview = bookSpecificData.volumeInfo.subtitle;
            });
        });
    });
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
