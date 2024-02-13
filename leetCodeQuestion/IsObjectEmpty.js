const isObjectEmpty = function (obj) {
    for (const _ in obj) return false;
    return true;

   // return obj === " ";

}

const object = {"Joy": 5};
console.log(isObjectEmpty(object));