//Object spread operator

const animals = {
	tiger:23,
	lion:5,
	monkey:2,
	bird:40
}

function objectSpread(p1, p2, p3){
	console.log(p1)
	console.log(p2)
	console.log(p3)
}


const {tiger, lion, ...rest} = animals;

objectSpread(tiger, lion, rest);

//////////////////////////////////////////////////////////

//finally

const urls = [
'https://swapi.dev/api/people/4',
'https://swapi.dev/api/people/11',
'https://swapi.dev/api/people/14',
'https://swapi.dev/api/people/20',
'https://swapi.dev/api/people/21',
]

Promise.all(urls.map(url => {
	return fetch(url).then(people => people.json())
}))
.then(array => {
	console.log('4', array[0])
	console.log('11', array[1])
	console.log('14', array[2])
	console.log('20', array[3])
	console.log('21', array[4])
})
.catch(err => console.log('ughhhh fix it!', err))
.finally(() => console.log('extra'));


////////////////////////////////////

const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums',
]

const getData = async function(){
	try{
		const [users, posts, albums] = await Promise.all(urls.map(async function(url){
			const response = await fetch(url);
			return response.json();
		}));
		console.log('users', users);
		console.log('posts', posts);
		console.log('albums', albums);
	} catch(err){
		console.log('ooooooooops', err);
	}
}

const getData2 = async function(){
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let request of arrayOfPromises){
		const data = await request.json();
		console.log(data);
	}
}