let prompt = require("prompt-sync")();
let name;
let earnings;

const taxCalculator = () =>{
    for (let i = 0; i < 3; i++) {
        let userName = prompt("Enter name: ");
        setName(userName);

        let earning = Number(prompt("Enter earnings: "));
        setEarning(earning);

        console.log("Name of citizen is: ", getName());
        console.log("Earnings of each citizen is: ", getEarnings());
        console.log("Citizens total tax is: ", calculateTaxRate());
        console.log();

    }

}

function setName(names) {
    name = names;
}

function getName() {
    return name;
}

function setEarning(earning){
    if (earning < 0) earnings = 0;
    else earnings = earning;
}
function getEarnings() {
    return earnings;
}

function calculateTaxRate(){
    let taxRate;

    if (earnings <= 30_000){
        taxRate = 0.15 * getEarnings();
    }else {
        taxRate = 0.20 * getEarnings();
    }
    return taxRate;
}

taxCalculator();