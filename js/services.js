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
.factory('goodReadsISBN', ['$http', function ($http) {
    var apiKey = 'wRgYbxDStUhOLSIUjCw2Uw';
    var ISNum = function (ISBN) {
        var goodReadsURL = 'https://www.goodreads.com/book/review_counts.json?isbns=' + ISBN + '&key=' + apiKey;
        return $http.get(goodReadsURL)
        .then(function (response) {
            return response.data;
        });
    };
    return {
        getISBN: function (ISBN) {
            return ISNum(ISBN);
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
}])
.factory('goodReadReview', ['$http', function ($http) {
    var apiKey = 'wRgYbxDStUhOLSIUjCw2Uw';
    var review = function (id) {
        var reviewURL = 'https://www.goodreads.com/book/show/' + id +'?format=json&key=' + apiKey;
        return $http.get(reviewURL)
        .then(function (response) {
            return response.data;
        });
    };
    return {
        getReview: function (id) {
            return review(id);
        }
    };
}]);
app.filter('noHTML', function () {
    return function (text) {
        return text ? String(text).replace(/[\[\]]+/g, '') : '';
    };
});
