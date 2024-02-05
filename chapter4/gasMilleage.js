let prompt = require("prompt-sync")();

const milleage = () =>{
    let miles = prompt("Enter miles driven: ")
    let gallons = prompt("Enter gallons used for each tankful: ")
    let totalMilesPerGallon = 0

    let milesPerGallon = miles / gallons;
    console.log(milesPerGallon)

    totalMilesPerGallon += milesPerGallon;

    let condition = true;
    let answer = prompt("Do you wish to continue? ")

    if (answer === 'no'){
        condition = false;
    }

    while (condition){
        miles = prompt("Enter miles driven: ")

        gallons = prompt("Enter gallons used for each tankful: ")
        milesPerGallon = miles / gallons;
        console.log(milesPerGallon)
        totalMilesPerGallon += milesPerGallon;

        answer = prompt("Do you wish to continue? ")
        if (answer === 'no'){
            condition = false;
        }
    }
    return `Total miles per gallon is ${totalMilesPerGallon}`;
}
module.exports = {milleage}
// console.log(milleage());