const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",

);

fetchPromise3
    .then((response) =>{
        if (!response.ok){
            throw new Error(`HTTp error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) =>{
        console.log(data[10].name);
    });