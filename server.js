const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const path        = require('path');
const favicon     = require('serve-favicon');
const logger      = require('morgan');
const routes      = require('./routes');
const app         = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use('/api/v1', routes);

app.get('/', function(req, res){
  throw new Error("For API calls use prefix '/api/v1'");
});

const port = 8080;
const server = app.listen(port, () => {
    console.log('Express server listening on port 8080');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json( {
      message: err.message,
      errorStack: JSON.stringify(err.stack)
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if (err) {
    return res.json({
      message: err.message
    });
  }
  next();
});

module.exports = app;