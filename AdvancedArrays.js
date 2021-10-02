const Array = [1, 2, 10, 16];

const double = []


const newArray = Array.forEach((num) => {
	double.push(num * 2);
})

console.log('forEach', double);

const mapArray = Array.map((num) => {
	*/return num * 2;/*
});

console.log('map', mapArray);

const filterArray = Array.filter(num => num === 5);

console.log('filter', filterArray);

const reduceArray = Array.reduce((accumulator, num) => {
	return accumulator + num
}