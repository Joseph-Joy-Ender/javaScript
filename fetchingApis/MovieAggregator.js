
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



// const url = "https://www.omdbapi.com/?i=tt3896198&apikey=e18fe170";
const url =
    // "https://api.themoviedb.org/3/movie/157336?api_key=c21352730c33a3fce0092102a285a244&append_to_response=videos,images";
    // "https://api.themoviedb.org/3/movie/157336/videos?api_key=c21352730c33a3fce0092102a285a244"
    "https://api.themoviedb.org/3/movie/157336?api_key=c21352730c33a3fce0092102a285a244";

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


   // const fetch = require('node-fetch');
   //
   // const url = 'https://api.themoviedb.org/3/movie/769800/images';
   // const options = {
   //     method: 'GET',
   //     headers: {
   //         accept: 'application/json',
   //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjEzNTI3MzBjMzNhM2ZjZTAwOTIxMDJhMjg1YTI0NCIsInN1YiI6IjY1ZThhNjRmY2FhYjZkMDE2Mjk1YTc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mnHWRiQf58ZwPfgY55aJUc9cTMG6NPKtc7pOwNtFNHs'
   //     }
   // };
   //
   // fetch(url, options)
   //     .then(res => res.json())
   //     .then(json => console.log(json))
   //     .catch(err => console.error('error:' + err));
