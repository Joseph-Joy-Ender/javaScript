const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/769800/images',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjEzNTI3MzBjMzNhM2ZjZTAwOTIxMDJhMjg1YTI0NCIsInN1YiI6IjY1ZThhNjRmY2FhYjZkMDE2Mjk1YTc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mnHWRiQf58ZwPfgY55aJUc9cTMG6NPKtc7pOwNtFNHs'
            // 'Bearer c21352730c33a3fce0092102a285a244'
    }
};

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });