//BigInt

//typeof

//typeof 1n

number.max_safe_integer 9007199254741000 - 1 se rompe
9007199254741000 - 1n funciona

//nullish coalesching operator ??
//optional chaining operator ?.

let will_pokemon = {
	pikachu:{
		species: 'mouse Pokemon',
		heigth: 0.4,
		weight: 6
	}
}

let andrei_pokemon = {
	raichu: {
		species: 'mouse Pokemon',
		heigth: 0.8,
		weight: 30
		power :''
	}
}

let power = andrei_pokemon?.pikachu?.power || 'no power'
console.log(power)
/*let weight = will_pokemon.pikachu.weight
console.log('weight:', weight)

/*if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight){
	let weight2 = andrei_pokemon.pikachu.weight
} else{
	let weight2 = undefined
	console.log(weight2)
}*/

let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3)