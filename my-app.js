//  fs stand for File System - we are importing it here 
const fileSystem = require('fs'); 
console.log('hello');
fileSystem.writeFileSync('fileName.txt','The Data we will put in to filename.txt from node js will come here as arg');


