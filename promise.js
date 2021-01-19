var wait5Secs = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(5);
    }, 5000);
});
// Sau 5s se in ra "5"
wait5Secs
    .then(function (data) { return console.log(data); })["catch"](function (err) { return console.error(err); });
// promise chi resolve hoac reject duy nhat 1 lan
var promise = new Promise(function (resolve, reject) {
    resolve('done');
    reject(new Error('...')); // ignored
    setTimeout(function () { return resolve('...'); }); // ignored
});
// In ra done
promise.then(function (data) { return console.log(data); });
function httpGet(url) {
    return new Promise(function (resolve, reject) {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var request = new XMLHttpRequest();
        request.onload = function () {
            // Success
            if (this.status === 200) {
                resolve(this.response);
            }
            else {
                // Something went wrong (404 etc.)
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}
httpGet('https://api.github.com/search/repositories?q=angular').then(function (value) {
    console.log('Contents: ' + value);
}, function (reason) {
    console.error('Something went wrong', reason);
});
// ParseJSON
function parseResponse(value) {
    try {
        return JSON.parse(value);
    }
    catch (err) {
        return value;
    }
}
httpGet('https://api.github.com/search/repositories?q=angular')
    .then(parseResponse)
    .then(function (data) { return console.log(data); })["catch"](function (reason) {
    console.error('Something went wrong', reason);
});
