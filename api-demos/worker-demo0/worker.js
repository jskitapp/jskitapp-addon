//
function a(...arg) {
    self.postMessage(arg);
}

self.onMessage = (req) => {
    let c = req.countDown;
    while (c > 0) {
        a(c);
        c--;
    }
    self.postMessage("hello world!!");
};
