var todos = [
"clean room",
"brush teeth",
"exercise",
"study javascript",
"eat healthy"
];

var todosimportant = [
"clean room",
"brush teeth",
"exercise",
"study javascript",
"eat healthy"
];
var todoslength = todos.length;
//for(var i=0; < todos.length; i++){
//	todos.pop();
//}

function logtodos(todo, i){
	console.log(todo, i);
}
todos.foreach(logtodos);
todosimportant.foreach(logtodos);
//var counterone = 10;
//while (counterone > 0){
//	console.log("while", counterone),
//	counterone--;
//}

//var countertwo = 10
//do{
//	console.log("do while", countertwo);
//	countertwo--;
//}while (countertwo > 10);