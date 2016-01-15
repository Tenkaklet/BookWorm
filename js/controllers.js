var app = angular.module('BookWorm')

.controller('HomeController', ['$scope', '$http','$timeout', '$location','getBook', function ($scope, $http, $timeout, $location, getBook) {
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
.controller('ResultsController', ['$scope', '$http','$timeout', '$location','getBook', function ($scope, $http, $timeout, $location, getBook) {

}])

.controller('specificBookController', ['$scope', '$http','$timeout', '$location','getBook', function ($scope, $http, $timeout, $location, getBook) {

}])

.controller('specificBookController', ['$scope', '$http','$timeout', '$location','getBook', function ($scope, $http, $timeout, $location, getBook) {

}]);
