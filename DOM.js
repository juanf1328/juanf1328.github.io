var Button = Document.getElementById("enter");
var input = Document.getElementById("userinput");
var ul = Document.querySelector("ul");

Function inputLength(){
	return input.value.length;
	}

Function createListElement(){
	var li = Document.createElement("li");
	li.appendChild(Document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
	
	Function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
		}
	}
	
	Function addListAfterKeypress(Event){
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
		}
	}
	
	Button.addEventListener("click", addListAfterClick);
	
	input.addEventListener("keypress", addListAfterKeypress);