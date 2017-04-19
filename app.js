'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// <Include the router index file>
const routes = require('./routes/')

const app = express();

// <Setup your routes middleware>
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/', routes)
// <catch any undefined routes with a 404 middleware>
app.use(function(req, res, next) {
	var err = new Error('No time for love, Dr. Jones!');
	err.status = 404;
	next(err);
})

// <Handle any errors that occur in the routing with error handlers defined at the bottom of our 
// middleware stack>

const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`Listening on port ${port} in ${process.env.NODE_ENV} environment`);
})

module.exports = app;
