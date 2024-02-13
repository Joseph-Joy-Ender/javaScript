const fs = require('fs');

const content = 'Hello, Joy!';

fs.writeFile('output.txt', content, 'utf8', (err) =>{
    if (err){
        console.error(err);
        return;
    }
    console.log('File written successfully!');
});