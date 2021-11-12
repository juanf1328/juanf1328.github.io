//ASYNC AWAIT

movePlayer(10, 'left')
.then(()=> movePlayer(400, 'left'))
.then(()=> movePlayer(10, 'right'))
.then(()=> movePlayer(330, 'left'))

async function playerStart(){
	const first = await movePlayer(100, 'left');
	const second = await movePlayer(400, 'left');
	await movePlayer(10, 'right');
	await movePlayer(330, 'left');
}


////////////////////////////////////////////////////

async function fetchUsers(){
	const resp = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await resp.json();
	console.log(data);
}


//////////////////////////////////




const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums'

]

Promise,all(urls.map(url=>
	fetch(url).then(resp=> resp.json())
	)).then(array => {
	console.log('users', array[0])
	console.log('posts', array[1])
	console.log('albums', array[2])
}).catch('ooops');



const getData = async function(){
	try{
		const [ users, post, albums ] = await Promise.all(urls.map(url=>
			fetch(url).then(resp => resp.json())
			))
		console.log('users', users)
		console.log('posts', posts)
		console.log('albums', albums)
	} catch (err){
		console.log('ooops', err)
	}
}