function loadDoc(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('readystatechange', function (){
        if (xhttp.readyState === 4 && xhttp.status === 200){
            const data = JSON.parse(xhttp.responseText);
            callback(undefined, data);
        }else if (xhttp.readyState === 4){
            callback("Error fetching data", undefined);
        }
    });
    // xhttp.onload = function() {
    //     document.getElementById("demo").innerHTML = this.responseText;
    // }
    // xhttp.open("GET", "ajax_info.txt", true);
    xhttp.open("GET", url);
    xhttp.send();
}

loadDoc("https://dummyjson.com/products", (err, data) =>{
    if (err) console.log("error", err);
    else console.log("data", data)
})