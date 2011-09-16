/**
 * Module dependencies.
 */

var express = require('express');
var now = require('now');
var mongodb = require('mongodb');




var FacebookClient = require("facebook-client").FacebookClient;

var facebook_client = new FacebookClient(
    "194268853965392", // configure like your fb app page states
    "2b6b87860a9f9188bb53e6f3680fb904" // configure like your fb app page states
);


var app = module.exports = express.createServer();

var client = new Db('test', new Server("127.0.0.1", 27017, {}));



// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Drawing'
  });
});



// TO produce node scripts on demand, perhaps you should create a listener based on directory structure so that when the page is called, it runs the script looking up in the database user id and such. it's definitely worth looking at mongodb



app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
