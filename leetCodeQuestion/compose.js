const compose = function (functions) {
    if (functions.length === 0){
        return function (x){return x;}
    }

    return functions.reduceRight(function (prev, curr){
        return function (x){
            return curr(prev(x));
        };
    });
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4));