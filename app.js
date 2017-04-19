'use strict'

const express = require('express');
const bodyParser = require('body-parser');

// <Include the router index file>
const routes = require('./routes/')

let app = express();

// <Setup your routes middleware>


// <catch any undefined routes with a 404 middleware>


// <Handle any errors that occur in the routing with error handlers defined at the bottom of our 
// middleware stack>

const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`Listening on port ${port} in ${process.env.NODE_ENV} environment`);
})

module.exports = app;
