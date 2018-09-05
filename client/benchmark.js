/*
Display how many web requests can be made to the server in one second
*/
var request = require('request-promise');
var counter = 0;
var running = true;

const requestOptions = {  
    url: 'http://localhost:3000/reverse',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Length': 7,
    },
    body: 'test123'
};

const makeRequest = () => {
    request(requestOptions)
        .then(() => {
            counter +=1
            makeRequest();
        })
        .catch((err) => {
            console.log(err);
        });
};

// Kill the program after a second
setTimeout(() => {
    console.log('Completed ' + counter + ' web requests in 1 second');
    process.exit(0);
}, 1000);

makeRequest();






