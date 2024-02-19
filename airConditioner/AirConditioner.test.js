const {AirConditioner} = require('./AirConditioner');
const expect = require("expect");

test('AirConditioner is on', () =>{
   let airConditioner = new AirConditioner();
   airConditioner.setOn();
   let actual = airConditioner.getIsOn();
   expect(actual).toEqual(true);

})