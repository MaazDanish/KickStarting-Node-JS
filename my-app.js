const Student = {
    name : 'Maaz Danish',
    age : 24,
    'Roll Number' : 23,
    fun(){
        console.log('Hey i am '+this.name+' a function of object');
    }
}

Student.fun();
console.log(Student);