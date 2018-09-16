
var request = require('request-promise');
const { fork } = require('child_process');
const numCPUs = require('os').cpus().length;

const numberOfRequests = 44; // Number of requests client will send at once
const numOfProcess = 4;

const start = () => {
    console.log(`Master ${process.pid} is running`);
 
    for (let i = 0; i < numOfProcess; i++) {
        const randDelay = Math.random() * 1000;
        setInterval(() => {
            console.log(`Forking process number ${i}...`);
            const forked = fork('child.js');
            forked.send(Math.floor(numberOfRequests / numOfProcess));
        }, 1000)
    }
};

start();
