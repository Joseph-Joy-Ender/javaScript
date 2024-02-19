// class AirConditioner{
//     constructor() {
//         this.isOn = false;
//         this.isOff = false;
//         this.initialTemperature = 21;
//     }
//
//     get getIsOn(){
//         return this.isOn;
//     }
//
//     static ison(){
//         this.isOn = true;
//     }
//     get getTemperature(){
//         return this.initialTemperature;
//     }
//
//     get increaseTemperature(){
//         return this.initialTemperature += 1;
//     }
//
//     get decreaseTemperature(){
//         return this.initialTemperature -= 1;
//     }
//
//
//     get below16(){
//         let result = 16;
//         if (this.initialTemperature < 16){
//             console.log('Temperature is still 16');
//         }
//         return result;
//     }
//
//     get beyond30(){
//         let result = 30;
//         if (this.initialTemperature < result){
//             console.log('Temperature is still 30');
//         }
//         return result;
//     }
//
// }


function AirConditioner(isOn, isOff, initialTemperature){
   this.isOn = false;
   this.isOff = false;
   this.initialTemperature = 21;

    this.setOn = function (){
        this.isOn = true;
    }

    this.getIsOn = function () {
        return this.isOn;
    }

    this.getIsOff = function () {
        return isOff;

    }

    this.Off = function () {
       isOff = false;
    }

    this.getTemperature = function () {
        return initialTemperature;
    }

    this.increaseTemperature = function () {
        return initialTemperature += 1;

    }

    this.decreaseTemperature = function (){
        return initialTemperature -= 1;
    }

    this.beyond30 = function (){
        let result = 30;
        if (initialTemperature >= 30){
            console.log("Temperature is still 30");
        }
        return result;

    }

    this.below16 = function (){
        let result = 16;
        if (initialTemperature >= 16){
            console.log("Temperature is still 16");
        }
        return result;

    }
}
module.exports = {AirConditioner}