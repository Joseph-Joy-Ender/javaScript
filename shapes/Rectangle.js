const Shape = require('./Shape')

class Rectangle extends Shape{
    constructor(name, side1, side2) {
        super(name, side1, side2);
    }

    get getArea(){
        return this.side1 * this.side2;
    }

    get isSquare(){
        return (this.side1 === this.side2);
    }

    get getName() {
        return super.getName;
    }
}

module.exports = {Rectangle};