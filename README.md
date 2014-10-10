[![Build Status](https://secure.travis-ci.org/Syeoryn/constant.js.svg)](http://travis-ci.org/Syeoryn/constant.js)

constant.js
====
#### A library for computing your favorite algorithms in constant time!

*Current functionality:*
   <ul>
     <li>identity  </li>
     <li>nFactorial  </li>
     <li>nRooks  </li>
     <li>nQueens  </li>
     <li>isPrime  </li>
     <li>fibonacci </li>
     <li>powerOfTwo </li>
     <li>rules.  Various rules, for when you need rules to reference.</li>
     <li>numbers </li>
     <li>words (English) </li>
     <li>google</li>
     <li>why.  A particularly useful function for debugging. Just invoke the 'why' function and pass a brief description of your problem, in plain english, as a string. Your code will be analyzed based on your input and you will have an answer in constant time. </li>
     <li>usefulRandom.  Functions arity is either 1, 2, or 3.  Returns a random number between the first and second parameter (second parameter assumed to be 0 if falsy), and returns an integer value if third parameter is truthy.</li>
   </ul>


#### Testing
Run tests on the library through your terminal:
```
mocha -r spec/env spec/
```