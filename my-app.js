// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 3000)
// setTimeout(() => console.log('d'), 3000)
// setTimeout(() => console.log('e'), 0)
// setTimeout(() => console.log('f'), 0)
// setTimeout(() => console.log('g'), 0)
// console.log('h');
// ---------------------------------------------------
// console.log('a');
// console.log('b');
// setTimeout(() => console.log('c'), 3000)
// setTimeout(() => console.log('d'), 0)
// console.log('e');
// ---------------------------------------------------
const promise = new Promise ( (completed, rejected) => {
    console.log('a');
    console.log('b');
    setTimeout(() => console.log('c'), 3000)
    setTimeout(() => console.log('d'), 0)
    console.log('e');
}).then( res => console.log(res))

// promise.then( () => console.log('done'));
async function pint(){
    console.log('a');
    console.log('b');
    setTimeout(() => console.log('c'), 3000)
    setTimeout(() => console.log('d'), 0)
    console.log('e');
}