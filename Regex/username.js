//Username Regex

const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

let username = "pindariCoder";
console.log(usernameRegex.test(username)); // Output: true

username = "pindariCoder!";
console.log(usernameRegex.test(username)); // Output: false
