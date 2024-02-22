class Shape{
    constructor(shapeName, side1, side2) {
        this.shapeName = shapeName;
        this.side1 = side1;
        this.side2 = side2;
    }

    get getName(){
        return this.shapeName;
    }
}

module.exports = Shape