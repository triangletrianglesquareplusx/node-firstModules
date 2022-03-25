// console.log(__dirname);

console.log('hey this is a node app.');
/*
__dirname - directory path


*/
//built in function(higher order)
// setInterval(()=>{
//     console.log('hey friends');
// }, 100)

//modules

//every js file is by default a module

//requre - ALWAYS starts with .
const names = require('./4-Module');

//console.log(names);

const sayHi = require('./5-utils');

sayHi(names.firstName);