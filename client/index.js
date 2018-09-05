var request = require('request-promise');

const numberOfRequests = 1000;
const requestOptions = {  
    url: 'http://localhost:3000/reverse',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Length': 7,
    },
    body: 'test123'
};

const requestPromise = () => {
    return new Promise(() => {
        return request(requestOptions)
    });
};

const generateRequestPromises = () => {
    const requestPromises = [];
    for ( i = 0; i < numberOfRequests; i++ ) {
        requestPromises.push(requestPromise());
    }
    return requestPromises;
};

const requestPromises = generateRequestPromises();
Promise.all(requestPromises)
