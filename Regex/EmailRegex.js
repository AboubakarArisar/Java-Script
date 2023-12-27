                //Email Regex

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let email = "pindaricoders@gmail.com";

console.log(emailRegex.test(email)); //it returns true 

email = "pindaricoders@email";
console.log(emailRegex.test(email)); //it returns false
