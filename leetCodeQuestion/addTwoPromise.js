const addTwoPromise = async function(promise1, promise2){
    const [num1, num2] = await Promise.all([promise1, promise2]);
    return num1 + num2;
};

promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
console.log(addTwoPromise(promise1, promise2));
