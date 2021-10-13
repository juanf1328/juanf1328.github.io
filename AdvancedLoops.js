const basket = ['apples', 'oranges', 'grapes'];

//1
for ( let i = 0; i < basket.length; i++){
	console.log(item);
}

//2

basket.forEach(item => {
	console.log(item);
})

basket = {
	0:'apples'
	1:'oranges'
	2:'grapes'
}

//for of
//iterating - arrays, strings

for (item of basket){
	console.log(item);
}

const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000
}
//for in - properties
//enumerating - objects

for (item of detailedBasket){
	console.log(item)
}