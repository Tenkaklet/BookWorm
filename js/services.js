var app = angular.module('BookWorm')
.factory('getBook', ['$http', function($http) {
    var apiKey = 'AIzaSyD8hW6xnul7nzZvPLBLHgHb5b_d2UzVjaw';
    var find = function (book) {
        var bookURL = 'https://www.googleapis.com/books/v1/volumes?' + apiKey + '&q=' + book + '&maxResults=10';
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
}])
.factory('getID', ['$http', function ($http) {
    var apiKey = 'AIzaSyD8hW6xnul7nzZvPLBLHgHb5b_d2UzVjaw';
    var Id = function (id) {
        var IdURL = 'https://www.googleapis.com/books/v1/volumes/' + id +'?key=' + apiKey;
        return $http.get(IdURL)
        .then(function (response) {
            return response.data;
        });
    };
    return {
        findbookId: function (id) {
            return Id(id);
        }
    };
}]);
app.filter('noHTML', function () {
    return function (text) {
        return text ? String(text).replace(/[\[\]]+/g, '') : '';
    };
});
