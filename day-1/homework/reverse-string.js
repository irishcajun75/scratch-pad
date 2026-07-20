// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a
 *  String as its only input and returns a new String
 *  representing the input String reversed.  For example:
 *
 *      reverseString('hello');  // => 'olleh'
 *
 * TIPS:
 *  a. create something to collect the output you'll return.
 *      
 * 
 *  b. you'll need a loop, which one is best? How do you know
 *     when to stop looping? " Since I know the exact length of the string, a standard
 *      for loop is perfect here.  To reverse a string, you start at the last index and step
 *        backward down to index 0"
 * 
 *  c. how do you access individual characters of a String? "You can access characters in a string using
 *      bracket notation [], just like an array"
 * 
 *  d. how do you concatenate Strings? What operator do we use? "You use the + operator or += to attach
 *      characters onto your collector variable"
 * 
 */

function reverseString(input) {
  // YOUR CODE HERE //
  // Storage for the reversed string.
  let reversed = "";

  // Loop backward starting from the last characterdown to index 0
  for (let i = input.length - 1; i>= 0; i--) {
    // Access character and concatente it onto our output
    reversed += input[i];
  }

  // Return the completed reversed string
  return reversed;
}

console.log(reverseString("hello"));

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
