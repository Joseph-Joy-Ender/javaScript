
   //  const options = {method: 'GET', headers: {accept: 'application/json'}};
   //
   // const getData = async () => {
   //     try {
   //         const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e18fe170\n', options)
   //         let result = await response
   //         console.log(result);
   //     } catch (error) {
   //         console.log(error)
   //     }
   // }
   // getData();



        // .then(response => response)
        // .then(response => console.log(response))
        // .catch(err => console.error(err));



    // const sendData = async () => {
    //     try {
    //         const response = await fetch("https://img.omdbapi.com/?apikey=[e18fe170]&\n", {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //
    //         const result = await response;
    //         console.log("Success:", result);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };
    //
    // sendData()



const url = "https://www.omdbapi.com/?i=tt3896198&apikey=e18fe170";
const options = {method: 'GET', headers:{accept: 'application/json'}};

const getData = async () =>{
    try {
        const response = await fetch(url, options)
        let result = await response.json()
        console.log(result);
    }catch (error){
        console.log(error.message)
    }
}

getData()
