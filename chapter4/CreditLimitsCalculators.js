let prompt = require("prompt-sync")();

const limitCalculator = function calculator() {
    let accountNumber = Number(prompt("Enter your account number: "));
    let beginningBalance = Number(prompt("Enter beginning balance: "));
    let totalItems = Number(prompt("Enter total of all items: "));
    let totalOfCredits = Number(prompt("Enter total of credits: "));
    let creditLimit = Number(prompt("Enter credit limit: "));

    let newBalance = beginningBalance + totalItems - totalOfCredits;
    if (newBalance > creditLimit){
        console.log("Credit limit exceeded");
    }

    console.log(`Account number is ${accountNumber}`);
    console.log(`Your balance at the beginning of the month is ${beginningBalance}`);
    console.log(`Total of all items charged by customer is ${totalItems}`);
    console.log(`Total of all credits applied to account is ${totalOfCredits}`);
    console.log(`The allowed credit limit is ${creditLimit}`);
    console.log(`The new balance is ${newBalance}`);
}

limitCalculator();



