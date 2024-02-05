const {milleage} = require('./gasMilleage')
test('calculating milleage', () =>{
    let miles = 20;
    let gallons = 5;
    let result = milleage(miles, gallons)
    expect(result).toBe(4);
})