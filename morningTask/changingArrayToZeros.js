const changingArrayToZeros = (array) =>{
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === 0){
                array[i][j] = 0;
            }
        }
    }
    return array;
}

const num = [[0, 5], [2, 3]];
console.log(changingArrayToZeros(num));