//Password Regex

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validPassword = "Abcdefg1$";
const invalidPassword = "weakpassword";

console.log(passwordRegex.test(validPassword)); //returns true
console.log(passwordRegex.test(invalidPassword)); //returns false
