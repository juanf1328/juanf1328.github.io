var database = [
{
	username:"juan",
	password: "supersecreto"
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
var usernamepromp=promt("what is your username?");
var passwordprompt=promt("What is your password?");

function signin(user, pass){
	if (user === database[0].username && pass === database[0].password){
		console.log(newsfeed);
	}else{
		alert("sorry, wrong username and password");
	}
}

signin(usernamepromp, passwordprompt);