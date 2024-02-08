const result = (array) =>{
    let row = array.length;
    let column = array.length;
    let newArray = [[row],[column]];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            newArray[i][j] = array[j][i];

        }
    }
    return newArray;

}

module.exports = {result}