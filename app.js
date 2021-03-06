//dependcies 
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var session = require('express-session');
var flash = require('connect-flash');
var multer = require('multer');
var upload = multer({ dest: './public/images/portfolio' });
var upload = multer({ dest: './public/images/uploads'});
// Route Files
var routes= require('./routes/index');
//add admin here 
// Init App
 
// Body Parser
// Handle Sessions
//npm sessions 
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
// // Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
// Public Folder
app.use(express.static(path.join(__dirname, 'public')));
// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// Connect Flash
app.use(flash());
app.use('/', routes);
app.use('/admin', admin);
app.set('port', (process.env.PORT || 3000));
//Start Server
