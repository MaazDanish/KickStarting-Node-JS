const arrayOne =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const arrayTwo = arrayOne.map( (val) => {
    ele = 'empty String'
    if(val === ' '){
        val = ele;
    }
    // console.log(ele +" " + val);
    return val;
});
console.log(arrayTwo);