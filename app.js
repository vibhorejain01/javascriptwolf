var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');



// Define the port to run on
app.set('port', 3000);


// Set static directory before defining routes
app.use(express.static( __dirname + '/public'));
app.use(express.static('node_modules'));


// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Deliver the homepage
app.get('/', function(req, res) {
    console.log("GET the homepage", req.path);
    res
      .status(200)
      .sendfile('index.html');
  });
  
// Deliver the salesforce
app.get('/salesforce', function(req, res) {
    console.log("GET the homepage", req.path);
    res
      .status(200)
      .sendfile('salesforce.html');
  });

  // Deliver the salesforce
app.get('/salesforcevideos', function(req, res) {
    console.log("GET the homepage", req.path);
    res
      .status(200)
      .sendfile('salesforcevideos.html');
  });

  // Deliver the salesforce
  app.get('/sfservicecloud', function(req, res) {
    console.log("GET the homepage", req.path);
    res
      .status(200)
      .sendfile('sfservicecloud.html');
  });
  

// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
  });
  
  