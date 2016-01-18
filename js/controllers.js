var app = angular.module('BookWorm')

.controller('HomeController', ['$scope', '$http','$timeout', '$location','getBook', function ($scope, $http, $timeout, $location, getBook) {

    var catagories = [
        'Anarchism',
        'Religion',
        'Sports',
        'Programming',
        'Politics',
        'Music',
        'History'
    ];

    $scope.featuredBook = catagories[Math.floor(Math.random() * catagories.length)];
    getBook.findBook($scope.featuredBook)
    .then(function (response) {
        $scope.books = response.items;
        // console.log($scope.books);

    });
    $timeout(function () {
        $scope.bookShowCase = true;
    }, 1000);



    $scope.bookSearch = function () {
        console.log($scope.bookTitle);
        getBook.findBook($scope.bookTitle)
        .then(function(response) {
            var bookData = response;
            // console.log(bookData);
        });
        $location.path('/results/' + $scope.bookTitle);
    };
}])
.controller('ResultsController', ['$scope', '$http','$timeout', '$location','getBook','$routeParams','getID' ,function ($scope, $http, $timeout, $location, getBook, $routeParams, getID) {
    // console.log($routeParams.Results);
    getBook.findBook($routeParams.Results)
    .then(function (response) {
        var bookData = response.items;
        $scope.numOfBooks = bookData.length;
        $scope.books = bookData;
    });
}])

.controller('specificBookController', ['$scope', '$http','$timeout', '$location','getBook','$routeParams','getID','goodReadsISBN','goodReadReview' ,function ($scope, $http, $timeout, $location, getBook, $routeParams, getID, goodReadsISBN, goodReadReview) {
    getID.findbookId($routeParams.bookId)
    .then(function (response) {
        console.debug(response);
        var specBook = response;
        $scope.bookName = specBook.volumeInfo.title;
        $scope.author = specBook.volumeInfo.authors;
        $scope.publisher = specBook.volumeInfo.publisher;
        $scope.bookIMG = specBook.volumeInfo.imageLinks.small;
        $scope.description = specBook.volumeInfo.description;
        $scope.bookType = specBook.volumeInfo.printType;
        $scope.pages = specBook.volumeInfo.pageCount;
        $scope.pubDate = specBook.volumeInfo.publishedDate;
        $scope.categories = specBook.volumeInfo.categories;
        $scope.ISBN = specBook.volumeInfo.industryIdentifiers[0].identifier;
        $scope.Specifics = 'Show More';

        $scope.showSpecData = function () {
            $scope.specificBookData = true;
            $scope.Specifics = 'Show Less';
            goodReadsISBN.getISBN($scope.ISBN)
            .then(function (response) {
                // console.log(response);
                $scope.id = response.books[0].id;
                // console.log($scope.id);
                goodReadReview.getReview($scope.id)
                .then(function (review) {
                    document.getElementById('Review').innerHTML += review.reviews_widget;
                    // console.log(review.reviews_widget);
                });
            });
        };
        $scope.removeSpecData = function () {
            $scope.specificBookData = false;
            $scope.Specifics = 'Show More';
        };
    });
}])

.controller('LoginController', ['$scope', '$http','$timeout', '$location','getBook', function ($scope, $http, $timeout, $location, getBook) {

}]);
