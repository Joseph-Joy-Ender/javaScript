let prompt = require("prompt-sync")();
let priceForItemSold;
const salesCalculator = () =>{
    let totalOfItemSold = 0;
    let condition = true;

    let priceOfItems = Number(prompt("Enter price of item sold: "));
    totalOfItemSold += priceOfItems;

    let answer = prompt("Do you wish to continue: ");
    if (answer === 'no') condition = false;

    while (condition){
        priceOfItems = prompt("Enter price of item sold: ");

        totalOfItemSold += priceOfItems;

        answer = prompt("Do you wish to continue: ");

        if (answer === 'no') condition = false;
    }
    setPriceForItemSold(totalOfItemSold);
    console.log("Total of item sold is: ", getPriceForItemSold());
    console.log("Salary is: ", getSalary());
    console.log("Percentage is: ", getPercentage());
    console.log("Calculated commission is: ",calculateCommission());
    console.log("Total wages is: ", calculateTotalWage());

}

function getPercentage() {
    return 0.09;
}

function getPriceForItemSold() {
    return priceForItemSold;
}
function getSalary(){
    return 200;
}

function setPriceForItemSold(priceForItemSolds) {
    if (priceForItemSolds < 0){
        priceForItemSold = 0;
    }else {
        priceForItemSold = priceForItemSolds;
    }
}

const calculateCommission = () =>{
    return getPercentage() * getPriceForItemSold();
}

function calculateTotalWage(){
    return calculateCommission() + getSalary();
}

salesCalculator();