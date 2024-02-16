let prompt = require("prompt-sync")();

const isSafe = (password) =>{
    password = prompt("Enter your password: ");
    const regex = /^[\W\w]{6,}$/;
    return regex.test(password);


}

console.log(isSafe());