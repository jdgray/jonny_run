var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', require('./routes/site'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// error handler
app.use(function(err, req, res, next) {
    
    res.status(err.status || 500);
    console.log(err);
    console.log(err.stack);

});

module.exports = app;
