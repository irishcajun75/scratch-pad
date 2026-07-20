// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 * 
 * Pseudocode:
 * 1. Loop from 1 up to and including 100 (using i <= 100)
 * 2. Inside the loop, check if i is divisible by BOTH 3 and 5
 *    -If true: consoel.log("FizzBuzz")
 * 3. Otherwise, check if i is divisible by only 3
 *    -If true: console.log('Fizz')
 * 4.  Otherwise, check if i is divisible by only 5
 *      -if true: console.log("Buzz")
 * 5.  If none of the above are true, just print the number itself
 *     - console.log(i)
 */
function fizzBuzz() {
  // YOUR CODE HERE //
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }

  }

}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.fizzBuzz = fizzBuzz;
}
