/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

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



// Canvasing



app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

var everyone = require("now").initialize(app);

everyone.now.sendclearcanvas = function(){
		everyone.now.recclearcanvas();
}

everyone.now.sendpaint = function(){
	everyone.now.receivepaint(this.now.color, this.now.y, this.now.x, this.now.size);
}

