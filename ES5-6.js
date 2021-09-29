/*/const name = "sally";
const age=34;
const pet="horse";

const greetingBest = 'hello ${name} you seem to be ${age-10}. what a lovely ${pet} you have';
*/
function greet(name='', age=30, pet='cat'){
	return 'hello ${name} you seem to be ${age-10}. what a lovely ${pet} you have';
}

function add(a, b){
	return a * b;
}

const add2 = (a,b) => a * b;