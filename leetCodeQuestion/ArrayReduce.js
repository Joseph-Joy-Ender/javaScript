const reduce = function (nums, fn, init){
    let value = init;
    for (let i = 0; i < nums; i++) {
        value = fn(value, nums[i]);
    }
    return value;
}

let nums = [1, 2, 3,4];
let fn = function sum (accum, curr){
    return accum + curr;
};
let init = 25;
console.log(reduce(nums, fn(init, nums), init));