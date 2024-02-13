const pushingZeros = (array) =>{
    const newArray = [];
    for (let i in array) {
        if (array[i] > 0 || array[i] !== 0){
            newArray.push(array[i]);
        }

    }
    for (const newArrayKey in array) {
        if (array[newArrayKey] === 0){
            newArray.push(array[newArrayKey]);
        }

    }
    return newArray;
}
module.exports = {pushingZeros}
