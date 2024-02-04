const createError = require('http-errors');
const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // display error message
    res.status(err.status || 500);
    res.json({
        error: err.message
    });
});

module.exports = app;
