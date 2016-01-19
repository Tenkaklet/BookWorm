// var http = require('http');
// var server = http.createServer(function(req,res) {
// 	//Set CORS
// 	res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.writeHead(200);
// 	res.end("Hello Cross Domain");
// });
//
// server.listen(5446);


var request = require('request');
var express = require('express');
var app = express();
app.use(express.static('public'));
var goodReads = require('simple-goodreads');
var gr = new goodReads();
gr.searchBook('Bible', function (err, book) {
  // book is retrieved
  console.log(book.id); // 3
  console.log(book.title); // Harry Potter and the Sorcerer\'s Stone (Harry Potter, #1)
  console.log(book.author); // J.K. Rowling
  console.log(book.publication_year); // 1997
  console.log(book.rating); // 4.40
});

// var BreweryDb = require('brewerydb-node');
// var brewdb = new BreweryDb('859bf6f8fdcf9f9cd2b69cdf21253a12');

// app.get('/beers', function (req, res) {
//   	brewdb.search.beers({ q: "dogfish" }, function(error, data) {
//   	res.json(data) //terminates search
//   });
// });
//
app.get('/books/:keyword', function (req, res) {
	var book = req.params.keyword;
	console.log(req.url);
	// URL encoding strings
  // 	brewdb.search.breweries({ q: keywordName }, function(error, data) {
  // 	res.json(data) //terminates search
  // });
  var apiKey = 'AIzaSyD8hW6xnul7nzZvPLBLHgHb5b_d2UzVjaw';
  var bookURL = 'https://www.googleapis.com/books/v1/volumes?' + apiKey + '&q=' + book + '&maxResults=10';
  var books = require('google-books-search-2');

    var options = {
    	key: apiKey,
    	field: 'title',
    	offset: 0,
    	limit: 10,
    	type: 'books',
    	order: 'relevance',
    	lang: 'en'
    };

    books.search(book, options)
    .then(function(results) {
        res.json(results);
    })
    .catch(function(error) {
        console.log(error);
    });
});
app.get('/goodreads', function(req, res) {
    // gr.getShelves('4085451', function(json) {
    //     res.send(JSON.stringify(json));
    // });

});
  // .pipe(request.put('http://mysite.com/img.png'))
  // var data = {
  //     items: [
  //         {
  //             volumeInfo: {
  //                 imageLinks: {
  //                     thumbnail: 'http://www.google.com',
  //                     small: 'small'
  //                 },
  //                 categories: [
  //                     'category of books'
  //                 ],
  //                 title: 'bookTitle',
  //                 publishedDate: 'publishedDate',
  //                 authors: 'authors',
  //                 publisher: 'publisher',
  //                 description: 'description',
  //                 printType: 'printType',
  //                 pageCount: 'pageCount',
  //                 industryIdentifiers: [
  //                     {
  //                         identifier: 'identifier'
  //                     }
  //                 ]
  //             }
  //         },
  //         {
  //             volumeInfo: {
  //                 imageLinks: {
  //                     thumbnail: 'http://www.google.com',
  //                     small: 'small'
  //                 },
  //                 categories: [
  //                     'category of books'
  //                 ],
  //                 title: 'bookTitle',
  //                 publishedDate: 'publishedDate',
  //                 authors: 'authors',
  //                 publisher: 'publisher',
  //                 description: 'description',
  //                 printType: 'printType',
  //                 pageCount: 'pageCount',
  //                 industryIdentifiers: [
  //                     {
  //                         identifier: 'identifier'
  //                     }
  //                 ]
  //             }
  //         }
  //     ]
  // };
  // res.json(data);
//
// app.get('/search/:keyword', function (req, res) {
// 	var keywordName = req.params.keyword
// 	brewdb.search.beers({ q: keywordName, withBreweries: "Y" }, function(error, data) {
// 	res.json(data)
// 	});
// });

var server = app.listen((process.env.PORT || 3000), function () {
});
