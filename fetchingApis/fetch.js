const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjEzNTI3MzBjMzNhM2ZjZTAwOTIxMDJhMjg1YTI0NCIsInN1YiI6IjY1ZThhNjRmY2FhYjZkMDE2Mjk1YTc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mnHWRiQf58ZwPfgY55aJUc9cTMG6NPKtc7pOwNtFNHs'
    }
};

fetch('https://api.themoviedb.org/3/movie/678955/images', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));