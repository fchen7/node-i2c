require('coffee-script');
require('coffee-script/register');
var i2c = require('./lib/i2c');
i2c.prototype.scanAsync = function() {
    return new Promise((resolve, reject) => {
        this.scan((error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
};
i2c.prototype.writeBytesAsync = function(addr, bytesToWrite) {
    return new Promise((resolve, reject) => {
        this.writeBytes(addr, bytesToWrite, error => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
};
i2c.prototype.writeAsync = function(buf) {
    return new Promise((resolve, reject) => {
        this.write(buf, error => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
};

module.exports = i2c;