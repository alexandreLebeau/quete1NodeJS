const information = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hello, I'm " + information.name + " from " + information.campus + " campus" ,
    e : "oO",
    T : "U "
}));