const fetchPromise4 = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",

);

fetchPromise4
    .then((response) =>{
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) =>{
        console.log(data[12].name);
    })
    .catch((error) =>{
        console.log(`Could not get products: ${error}`);
    });