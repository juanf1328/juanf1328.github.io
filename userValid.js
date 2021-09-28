function isUserValid(bool){
	return bool;
}

var answer = isUserValid(true) ? "you may enter" : "Access Denied"

function condition(){
	if(isUserValid(true)){
		return "you may enter";
	} else{
		return "Access Denied";
	}
}

var answer2=condition();