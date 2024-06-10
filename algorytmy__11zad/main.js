let first = new Worker('first.js');
let second = new Worker('second.js');

let sharedResource = 0;

first.onmessage = function(e) {
    sharedResource += e.data;
    console.log('Worker 1: ' + sharedResource);
}

second.onmessage = function(e) {
    sharedResource += e.data;
    console.log('Worker 2: ' + sharedResource);
}

first.postMessage(sharedResource);
second.postMessage(sharedResource);