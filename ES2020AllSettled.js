const promiseOne = new Promise((resolve, rejected)=>
	setTimeout(resolve, 6000))
const promiseTwo = new Promise((resolve, rejected)=>
	setTimeout(rejected, 3000))


Promise.all([promiseOne, promiseTwo]).then(data=> console.log(data))
.catch(e=> console.log('something failed', e));		 