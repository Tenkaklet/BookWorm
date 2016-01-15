var app = angular.module('BookWorm')
.factory('getBook', ['$http', function($http) {
    var apiKey = 'AIzaSyAxW_sXDSFrPoNNBdG07dcCbUHCMi5TG8Q';
    var find = function (book) {
        var bookURL = 'https://www.googleapis.com/books/v1/volumes?' + apiKey + '&q=' + book;
        return $http.get(bookURL)
        .then(function (response) {
            return response.data;
        });
    };
    return {
        findBook: function (book) {
            return find(book);
        }
    };
}]);
