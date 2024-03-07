const http = require('https');

const options = {
    method: 'GET',
    hostname: 'api.themoviedb.org',
    port: null,
    path: '/3/movie/769800/images',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer c21352730c33a3fce0092102a285a244',
    }
};

const req = http.request(options, function (res) {
    const chunks = [];

    res.on('data', function (chunk) {
        chunks.push(chunk);
    });

    res.on('end', function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.end();