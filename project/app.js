var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var elementRouter = require("./routes/elements");
var groupRouter = require("./routes/group");

var app = express();

/***********************************************
 *
 * Engine
 *
 ***********************************************/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/***********************************************
 *
 * Database
 *
 ***********************************************/
const useDatabase = false
if (useDatabase == true) {
  var mongoose = require('mongoose')
  const mongoDBConnection = "mongodb://localhost:27017/some_test"
  mongoose.connect(mongoDBConnection)
  var db = mongoose.connection
  db.on('error', console.error.bind(console, "MongoDB connection error:"));
}



/***********************************************
 *
 * Router
 *
 ***********************************************/
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/elements', elementRouter);
app.use('/group', groupRouter);

// catch 404 and forward to error handler
/***********************************************
 *
 * Error 404
 *
 ***********************************************/
app.use(function(req, res, next) {
  next(createError(404));
});

/***********************************************
 *
 * Error Handling
 *
 ***********************************************/
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/* Export the module */
module.exports = app;
