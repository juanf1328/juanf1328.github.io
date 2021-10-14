const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		debugger;
		return [].concat([0, 1])
		accumulator(array)
	}, []);


const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(a, b) => a.concat(b), []);