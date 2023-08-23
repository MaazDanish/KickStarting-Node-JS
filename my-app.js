async function printSequence() {
	console.log('a');
	console.log('b');
	await function () {
		return new Promise((res, rej) => {
			setTimeout(() => {
				console.log('c');
				res();
			}, 3000)
		})
	}()
	await function () {
		return new Promise((res, rej) => {
			setTimeout(() => {
				console.log('d');
				res();
			}, 0)
		})
	}()
	console.log('e');
}
printSequence();