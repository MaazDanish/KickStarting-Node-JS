const arrayOne = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
const arrayTwo = arrayOne.map((val) => {
    ele = 'empty String'
    if (val === ' ') {
        val = ele;
    }
    // console.log(ele +" " + val);
    return val;
});
console.log(arrayTwo);
// --------------------------------
const obj1 = { 'key1': 1, 'key2': 2 }
const obj2 = { ...obj1, key1: 1000 }
console.log(obj1)
console.log(obj2)
// -------------------
const obj3 = { 'key1': 1 }
const obj4 = { ...obj1 }
if (obj3 === obj4) {
    console.log('same objects')
}
else {
    console.log('different objects')
}