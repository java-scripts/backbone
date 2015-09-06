var users;
var userIdCounter = 5;
function getUserById(userId){
	for(var i in users){
		var user = users[i];
		if(user.id==userId){
			return user;
		}	
	}
	return {};
}
function updateUser(user){
	for(var i in users){		
		if(user.id==users[i].id){
			users[i]=user;break;
		}	
	}
}
function deleteUser(userId){
	for(var i in users){		
		if(userId==users[i].id){
			users.splice(i, 1);	break;					
		}
	}
}

function getUsers(){
	return users;
}

function addUser(user){
	userIdCounter++;
	user.id = userIdCounter;
	users.push(user);
}

var randUserUtil = {getUsers:getUsers, getUserById:getUserById,updateUser:updateUser,deleteUser:deleteUser,addUser:addUser};
module.exports = randUserUtil;


users=[{
	'id':1,
	'name':'test user1',
	'age':21,
	'gender':'M',
	'salary':50000,
	'dob':'01/08/1972'
},{
	'id':2,
	'name':'test user2',
	'age':24,
	'gender':'M',
	'salary':55000,
	'dob':'31/02/1962'
},{
	'id':3,
	'name':'test user3',
	'age':31,
	'gender':'F',
	'salary':45000,
	'dob':'01/07/2000'
},{
	'id':4,
	'name':'test user4',
	'age':25,
	'gender':'F',
	'salary':55000,
	'dob':'01/01/1999'
},{
	'id':5,
	'name':'test user5',
	'age':34,
	'gender':'M',
	'salary':36000,
	'dob':'21/03/1982'
}];
