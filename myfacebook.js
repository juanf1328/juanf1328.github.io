var database = [
{
	username:"juan",
	password: "supersecreto"
}
{
	username:"sally",
	password: "superrr"
}
{
	username:"ingrid",
	password: "1328"
}
];

var newsfeed = [
{
	username:"bobby",
	timeline:"so tired from all that learning"

},
{
	username:"sally",
	timeline:"Javascript is soooo coooool!"

}
];
function isuservalid(username, password){
		for (var i=0; i < database.length; i++){
		if(database[i].username=== username && database[i].password === password){
			return true;
		
	}
	return false;
}

function signin(user, pass){

	for (var i=0; i < database.length; i++){
		if(isuservalid(username, password)){
			console.log(newsfeed);
		}else{
			alert("sorry, wrong username and password");
		}
	}
var usernamepromp=promt("what is your username?");
var passwordprompt=promt("What is your password?");

}

signin(usernamepromp, passwordprompt);