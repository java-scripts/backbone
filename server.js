var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var router = express.Router();  
var userUtil = require('./randuserutil');

app.get('/', function(req, res){
  res.sendfile('index.html');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/'));

// middleware to use for all requests
router.use(function(req, res, next) {   
  //  console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/users').get(function(req,res){
	console.log('GET /users');	
	res.json(userUtil.getUsers());
}).post(function(req,res){
	console.log('POST /users');
	var user = req.body;	
	console.log('adding user',user);
	userUtil.addUser(user);
	res.json(user)
});

router.route('/users/:id')
.get(function(req,res){
	console.log('GET /users/:id');	
	res.json(userUtil.getUserById(req.params.id));
}).put(function(req,res){
	console.log('PUT /users/:id');	
	var user = req.body;
	console.log(user);
	userUtil.updateUser(user);
	res.json(user)
}).delete(function(req,res){
	console.log('Delete user/:id')
	userUtil.deleteUser(req.params.id);	
	res.json({msg:'userdeleted'});
});
http.listen(4567, function(){
  console.log('listening on *:4567');
});

app.use('/service', router);

