
var request = require('request-promise');

// static POST request configuration
const requestOptions = {
    url: 'http://hw1cloud549ak-env-3.29up92p9cr.us-east-2.elasticbeanstalk.com/spin',
    //url: 'http://localhost:8081/spin',
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        'Content-Length': 7,
    },
    body: 'test123'
};

// Return a promise to send a post request
const requestPromise = () => {
    const startTime = Date.now();
    return request(requestOptions)
        .then(() => {
            return ((Date.now() - startTime) / 1000);
        });
};

// Generate an array of request promises of length n
const generateRequestPromises = (numberOfRequests) => {
    const requestPromises = [];
    console.time('time spent sending ' + numberOfRequests + ' requests');
    for ( i = 0; i < numberOfRequests; i++ ) {
        requestPromises.push(requestPromise());
    }
    console.timeEnd('time spent sending ' + numberOfRequests + ' requests')
    return requestPromises;
};

// Given a list of response times find the average
const calculateAverageResponseTime = (responseTimes) => {
    var sum = 0;
    responseTimes.forEach((responseTime) => {
        sum += responseTime;
    })
    const avg = sum / responseTimes.length;

    console.log('average response time: ' + avg.toString() + 's\n');
    process.exit(0)
};

const main = (numberOfRequests) => {
    const requestPromises = generateRequestPromises(numberOfRequests);
    Promise.all(requestPromises).then((responseTimes) => calculateAverageResponseTime(responseTimes));
}

process.on('message', (numberOfRequests) => {
    main(numberOfRequests);
});
