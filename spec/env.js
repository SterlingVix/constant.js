global.expect = require('chai').expect;

var constant = require('../index.js');
global.nFactorial = constant.nFactorial;
global.isPrime = constant.isPrime;
global.fibonacci = constant.fibonacci;
global.powerOfTwo = constant.powerOfTwo;
global.rules = constant.rules;
global.why = constant.why;
global.usefulRandom = constant.usefulRandom;
