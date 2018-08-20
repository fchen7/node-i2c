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
i2c.prototype.writeByteAsync = function(byteToWrite) {
    return new Promise((resolve, reject) => {
        this.writeByte(byteToWrite, error => {
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

i2c.prototype.readAsync = (nBytes) => {
    return new Promise((resolve, reject) => {
        this.read(nBytes, function (error, res) {
            if (error) {
                reject(error);
            } else {
                resolve(res);
            }
        });
    });
};

module.exports = i2c;
