const {Rectangle} = require('./Rectangle');

test('area of rectangle', () =>{
    const rectangle1 = new Rectangle("my rectangle", 5, 4);
    let area = rectangle1.getArea;
    expect(area).toEqual(20.0);
})


test('is square', () =>{
    const rectangle1 = new Rectangle("my rectangle", 5, 4);
    let isSquare = rectangle1.isSquare
    expect(isSquare).toEqual(false);
})

