//reference type

var object1 = {
	value:10
};

var object2 = object1;

var object3 = {
	value:10
};

//context vs scope

const object4 ={
	a: function(){
		console.log(this);
	}
}

//instalation

class player{
	constructor(name, type){
		console.log('player', this);
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`hi i am ${this.name}, im a ${this.type}`)
	}
}

class wizard extends player{
	constructor(name, type){
		super(name, type)
		console.log('wizard', this);
	}
	play(){
		console.log(`weeeee im a ${this.type}`);
	}
}

const wizard1 = new wizard('shelly', 'healer');
const wizard2 = new wizard('shawn', 'dark magic');