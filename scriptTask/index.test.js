
const {sum, multiply} = require('./index')


test('sum a and b', () =>{
    let a = 2;
    let b = 3;
    let result = sum(a, b)
    expect(result).toBe(5);
})

test('multiply a and b', () =>{
    let a = 2;
    let b = 3;
    let result = multiply(a, b)
    expect(result).toBe(6);
})