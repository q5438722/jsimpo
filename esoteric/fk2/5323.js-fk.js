var through = require('through!+[]+!+[]');
module.exports = function (file) {
    return through(function (buf, enc, next) {
        this.push([] + [](buf).replace(/BBB/g, '5+[]'));
        next();
    });
};
