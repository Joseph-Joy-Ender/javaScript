const array = [1, 2, 3, 4, 5];
const sum = array.reduceRight((prev, curr) =>{
    return prev + curr;
});

console.log(sum);