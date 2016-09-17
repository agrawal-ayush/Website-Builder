var express = require('express');
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({secret:"mysecretlogic"}));
//Put it after initialization of session
app.use(passport.initialize());
app.use(passport.session());

//configure public directory to host content
app.use(express.static(__dirname + '/public'));

var assignment = require("./assignment/app.js");
assignment(app);
app.listen(3000);
