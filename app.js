//const http = require('http');
//var createError = require('http-errors');
//var cookieParser = require('cookie-parser');
//var lessMiddleware = require('less-middleware');
//var logger = require('morgan');
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

const express = require('express');
const path = require('path');

//init app
var app = express();

//load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//home route
app.get('/', function(req, res){  
    let articles = [
        {
            id:1,
            title: 'Article One',
            author: 'Eva Cheong',
            body: 'This is article one'
        },
        {
            id:2,
            title: 'Article Two',
            author: 'Lester Goh',
            body: 'This is article two'
        },
        {
            id:3,
            title: 'Article Three',
            author: 'Evelyn Ting',
            body: 'This is article three'
        }
    ];
    
    res.render('index', {
        title: 'Articles',
        articles: articles
    });
});

//add route
app.get('/articles/add', function(req, res){
    res.render('add_article', {
        title: 'Add Article'
    });
});

//start server
app.listen(8080, function(){
    console.log('Server started on port 8080');
});

//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('Hello World!');
//}).listen(8080);

//view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(lessMiddleware(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  next(createError(404));
//});
//
//// error handler
//app.use(function(err, req, res, next) {
//  // set locals, only providing error in development
//  res.locals.message = err.message;
//  res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//  // render the error page
//  res.status(err.status || 500);
//  res.render('error');
//});
//
//module.exports = app;
