// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

// loading authentication modules
const passport      = require('passport');
const cookieParser  = require('cookie-parser');
const session       = require('express-session');

var secret = "random";
if (process.env.SESSION_SECRET) {
  secret = process.env.SESSION_SECRET;
}
app.use(session({
  secret: secret,
  resave: true,
  saveUninitialized: true
}));
// app.use(session({ secret: process.env.SESSION_SECRET }));?

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/my-project')));
// app.use(express.static(path.join(__dirname, 'public')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

// var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost:27017/webdev', { useNewUrlParser: true });

require('./assignment/app')(app);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
