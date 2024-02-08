const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",

);
fetchPromise2.then((response) =>{
    const jsonPromise = response.json();
    jsonPromise.then((data) =>{
        console.log(data[0].name);
        console.log(data[1].name);
        console.log(data[2].name);
        console.log(data[3].name);
        console.log(data[4].name);
    });
});