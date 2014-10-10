var fs = require('fs');
filedata = fs.readFileSync('./constant.js','utf8');
eval(filedata);

exports.nFactorial = nFactorial;
exports.isPrime = isPrime;
exports.fibonacci = fibonacci;
exports.powerOfTwo = powerOfTwo;
exports.rules = rules;
exports.why = why;
exports.usefulRandom = usefulRandom;
