ExpressJS Interview Questions And Answers

1. Question 1. What Is Express Js?
   Answer :
   Express JS is a framework which helps to develop web and mobile applications. Its works on nodejs plateform. Its sub part of node.js.
2. Question 2. What Type Of Web Application Can Built Using Express Js?
   Answer :
   you can build single-page, multi-page, and hybrid web applications.
   Java Script Interview Questions
3. Question 3. What Are Core Features Of Express Framework?
   Answer :
   o Allows to set up middlewares to respond to HTTP Requests
   o Defines a routing table which can works as per HTTP Method and URL.
   o Dynamically render HTML Pages
4. Question 4. Why I Should Use Express Js?
   Answer :
   Express 3.x is a light-weight web application framework to help organize your web application into an MVC architecture on the server side.
   Java Script Tutorial
5. Question 5. How To Install Expressjs?
   Answer :
   Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.
   $ mkdir myapp
   $ cd myapp
   Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.
   $ npm init
   This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:
   entry point: (index.js)
   Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.
   Now install Express in the myapp directory and save it in the dependencies list. For example:
   $ npm install express --save
   To install Express temporarily and not add it to the dependencies list, omit the --save option:
   $ npm install express
   AJAX Interview Questions
6. Question 6. How To Get Variables In Express.js In Get Method?
   Answer :
   var express = require('express');
   var app = express();
   app.get('/', function(req, res){
   /\* req have all the values \*\*/  
    res.send('id: ' + req.query.id);  
   });
   app.listen(3000);
7. Question 7. How To Get Post A Query In Express.js?
   Answer :
   var bodyParser = require('body-parser')
   app.use( bodyParser.json() ); // to support JSON-encoded
   app.use(bodyParser.urlencoded({ // to support URL-encoded
   extended: true
   }));
   AJAX Tutorial MySQL Interview Questions
8. Question 8. How To Output Pretty Html In Express.js?
   Answer :
   app.set('view options', { pretty: true });
9. Question 9. How To Get The Full Url In Express?
   Answer :
   var port = req.app.settings.port || cfg.port;
   res.locals.requested_url = req.protocol + '://' + req.host + ( port == 80 || port == 443 ? '' : ':'+port ) + req.path;
   HTML+Javascript Interview Questions
10.   Question 10. How To Remove Debugging From An Express App?
      Answer :
      var io = require('socket.io').listen(app, { log: false });
      io.set('log level', 1);
      MySQL Tutorial
11.   Question 11. How To Do 404 Errors?
      Answer :
      app.get('\*', function(req, res){
      res.send('what???', 404);
      });
      JavaServer Faces (JSF) Interview Questions
12.   Question 12. How To Download A File?
      Answer :
      app.get('/download', function(req, res){
      var file = \_\_dirname + '/download-folder/file.txt';
      res.download(file);
      });
      Java Script Interview Questions
13.   Question 13. What Is The Parameter “next” Used For In Express?
      Answer :
      app.get('/userdetails/:id?', function(req, res, next){
      });
      req and res which represent the request and response objects
      nextIt passes control to the next matching route.
      JavaServer Faces (JSF) Tutorial
14.   Question 14. What Function Arguments Are Available To Express.js Route Handlers?
      Answer :
      The arguments available to an Express.js route handler function are:
      o req - the request object
      o res - the response object
      o next (optional) - a function to pass control to one of the subsequent route handlers
      The third argument may be omitted, but is useful in cases where you have a chain of handlers and you would like to pass control to one of the subsequent route handlers, and skip the current one.
15.   Question 15. How To Config Properties In Express Application?
      Answer :
      In an ExpressJS Application, we can config properties in following two ways:
      With Process.ENV:
      o Create a file with name ‘.env’ inside the project folder.
      o Add all the properties in ‘.env’ file.
      o In server.js any of the properties can be used as:

var host = process.env.APP_HOST
app.set('host', host);
logger.info('Express server listening on http://' + app.get('host'));
With RequireJs:
o Create a file called ‘config.json’ inside a folder called ‘config’ inside the project folder.
o Add config properties in config.json.

{
"env":"development", "apiurl":"http://localhost:9080/api/v1/"
}
o Use require to access the config.json file.

var config = require('./config/config.json');
Node.js Interview Questions 16. Question 16. How To Allow Cors In Expressjs? Explain With An Example?
Answer :
In order to allow CORS in Express.js, add the following code in server.js:
app.all('_', function(req, res, next) {
res.set('Access-Control-Allow-Origin', '_');
res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
if ('OPTIONS' == req.method) return res.send(200);
next();
});
Node.js Tutorial 17. Question 17. How To Redirect 404 Errors To A Page In Expressjs?
Answer :
In server.js add the following code to redirect 404 errors back to a page in our ExpressJS App:
/_ Define fallback route _/
app.use(function(req, res, next) {
res.status(404).json({errorCode: 404, errorMsg: "route not found"});
});
CSS Interview Questions 18. Question 18. Explain Error Handling In Express.js Using An Example?
Answer :
From Express 4.0 Error handling is much easier. The steps are as following:
o Create an express.js application and as there is no built-in middleware like errorhandler in express 4.0, therefore, the middleware need to be either installed or need to create a custom one.
Create a Middleware:
o Create a middleware as following:

// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
// render the error page
res.status(err.status || 500);
res.render('error');
});
Install Error Handler Middleware:
o Install errorhandler.
npm install errorhandler --save
o Create a variable.
var errorhandler = require('errorhandler')
o Use the middleware as following:

if (process.env.NODE_ENV === 'development') {
// only use in development
app.use(errorhandler({log: errorNotification}))
}
function errorNotification(err, str, req) {
var title = 'Error in ' + req.method + ' ' + req.url
notifier.notify({
title: title,
message: str
})
}
AJAX Interview Questions 19. Question 19. How To Enable Debugging In Express App?
Answer :
In different Operating Systems, we have following commands:
On Linux the command would be as follows:
$ DEBUG=express:_ node index.js
On Windows the command would be:
set DEBUG=express:_ & node index.js
CSS Tutorial 20. Question 20. How To Implement Jwt Authentication In Express App ? Explain With Example?
Answer :
o Create a folder called ‘keys’ inside project folder.
o Install some dependencies as following:
Npm install jsonwebtoken –save
o Add the login router routes/index.js

router.post('/login, function(req, res) {
// find the user
User.findOne({
name: req.body.username
}, function(err, res) {
if (err) throw err;
if (!res) {
res.json({ success: false, message: Login failed.' });
} else if (res) {
// check if password matches
if (res.password != req.body.password) {
res.json({ success: false, message: Login failed. Wrong password.' });
} else {
var token = jwt.sign(res, app.get('superSecret'), {
expiresInMinutes: 1600
});
// return the information including token as JSON
res.json({
success: true,
message: 'Valid token!',
token: token
});
}  
 } });
});
o Use the token in application

jwt = require("express-jwt");
app.use(function(req, res, next) {
var token = req.body.token || req.query.token || req.headers['x-access-token'];
if (token) {
jwt.verify(token, app.get('superSecret'), function(err, decoded) {  
 if (err) {
return res.json({ success: false, message: 'Invalid token.' });  
 } else {
req.decoded = decoded;  
 next();
}
});
} else {
return res.status(403).send({
success: false,
message: 'No token given.'
});  
 }
});
Javascript Objects Interview Questions 21. Question 21. How Should I Structure My Application?
Answer :
There is no definitive answer to this question. The answer depends on the scale of your application and the team that is involved. To be as flexible as possible, Express makes no assumptions in terms of structure.
Routes and other application-specific logic can live in as many files as you wish, in any directory structure you prefer. View the following examples for inspiration:
o Route listings
o Route map
o MVC style controllers
Also, there are third-party extensions for Express, which simplify some of these patterns:
o Resourceful routing 22. Question 22. How Do I Define Models?
Answer :
Express has no notion of a database. This concept is left up to third-party Node modules, allowing you to interface with nearly any database.
Javascript Objects Tutorial 23. Question 23. How Can I Authenticate Users?
Answer :
Authentication is another opinionated area that Express does not venture into. You may use any authentication scheme you wish.
Javascript Advanced Interview Questions 24. Question 24. Which Template Engines Does Express Support?
Answer :
Express supports any template engine that conforms with the (path, locals, callback) signature.
MySQL Interview Questions 25. Question 25. How Do I Render Plain Html?
Answer :
There’s no need to “render” HTML with the res.render() function. If you have a specific file, use the res.sendFile() function. If you are serving many assets from a directory, use the express.static() middleware function.
