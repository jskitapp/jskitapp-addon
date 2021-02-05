import Worker from 'worker';

let rworker = new Worker("./worker");

rworker.onMessage = (rep) => {
    console.log(rep);
};

rworker.postMessage({
    countDown: 3
});
