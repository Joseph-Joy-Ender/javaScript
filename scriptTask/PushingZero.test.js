const {pushingZeros} = require('./PushingZeros')


test('push zeros to the end of the array', () =>{
    let input = [0, 4, 2, 0, 5,0];
    let result = pushingZeros(input)
    let output = [4, 2, 5, 0,0, 0];
    expect(result).toEqual(output);
})

test('push zeros to the end of the array2', () =>{
    let input = [4, 0, 0, 5, 7];
    let result = pushingZeros(input)
    let output = [4, 5, 7, 0, 0];
    expect(result).toEqual(output);
})

test('push zeros to the end of the array and negative number', () =>{
    let input = [0, -4, 2, 0, -5, -1];
    let result = pushingZeros(input)
    let output = [-4, 2, -5, -1, 0, 0];
    expect(result).toEqual(output);
})