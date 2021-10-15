const a = 1;
const b = 10;
const c = 100;

// call stack
console.log('1');
console.log('2');
console.log('3');

const one =() => {
	const two = () => {
		console.log('4');
	}
	two();
}



//call stack

//recursion
function foo(){
	foo()
}

foo()

console.log('1');
setTimeout(() => {
	console.log('2');
}, 2000)
console.log('3');


//event loop
element.addEventListener('click', () => {
	console.log('click')
})