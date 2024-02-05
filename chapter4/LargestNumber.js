let prompt = require("prompt-sync")();

const largest = () =>{
    let largestNumber = Number(prompt("Enter your units sold: "));

    for (let i = 1; i <= 10; i++) {
        let secondNumber = Number(prompt("Enter your units sold: "));
        if (secondNumber > largestNumber) largestNumber = secondNumber;
    }

    return `Largest number is ${largestNumber}`;
}

console.log(largest())