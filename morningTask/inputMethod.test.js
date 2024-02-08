const {result} = require('./inputMethod')


test('array transpose', () =>{
    let array = [[2, 3], [4, 5]];
    let answer = result(array);
    let ans = [[2, 4], [3, 5]];
    expect(answer).toEqual(ans);
})

test('array transpose2', () =>{
    let array = [[5, 3], [9, 8]];
    let answer = result(array);
    let ans = [[5, 9], [3, 8]];
    expect(answer).toEqual(ans);
})