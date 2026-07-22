// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 * 
 */

function createGreaterThanFilter(base) {
  return function(value) {
    return value > base;
  }
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 * I: base, can be a string or number
 * O: a new function that accepts a value parameter and returns true
 *  if value is less than base, otherwise false
 *  C: must return an anonymous function that takes a value arguement
 *  E: eorks for both numbers and strings (JavaScript naturally compares
 *  strings alphabetically using <)
 */

function createLessThanFilter(base) {
  // YOUR CODE HERE
  return function(value) {
    return value < base;
  };
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 * I: startsWith a single character
 * O: a function that accepts a string and returns true if it starts with that character
 * (case insensitive) false if otherwise
 * C: must return an inner function
 * E: mixed casing
 *
 * This function needs to be case insensitive.
 */

function createStartsWithFilter(startsWith) {
  // YOUR CODE HERE
  return function(string) {
    return string.toLowerCase().startsWith(startsWith.toLowerCase());
  };
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 * I: endsWith a single character
 * O: a function that accepts a string and returns true if it ends with that character
 * (case insensitive) false otherwise
 * E: mixed casing at the edge of the string
 */

function createEndsWithFilter(endsWith) {
  // YOUR CODE HERE //
  return function(string) {
    return string.toLowerCase().endsWith(endsWith.toLowerCase());
  };
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 *
 * examples:
 *
 *    modifyStrings(['a', 'b', 'c'], function(str) { return str.toUpperCase() });
 *    // returns => ['A', 'B', 'C']
 *
 *    modifyString(['a', 'b'], function(str){ return str + "!" });
 *    // returns => ['a!', 'b!']
 * 
 * I: strings (Array of strings)
 *    modify (function that modifies a string)
 * O: a new array containing the modified strings
 * C: must apply the modify function to each element of the array 
 *  without altering the original array (pure function pattern)
 * E: empty array input [] should return an empty array
 *
 */
function modifyStrings(strings, modify) {
  // YOUR CODE HERE
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    result.push(modify(strings[i]));
  }
  return result;
}

/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 *
 * I: strings (Array of Strings)
 *    test (function that returns true or false for a string)
 * O: true if every string passes or false if even one string fails
 * C: must check every element unless an early false is triggered
 * E: empty array [] should default to returning true
 * examples:
 *
 *    allStringsPass(['a', 'b', 'c'], function(str) { return str.length === 1 });
 *    // returns => true
 *
 *    allStringsPass(['a', 'bb', 'c'], function(str) { return string.length === 1 });
 *    // returns => false
 */

function allStringsPass(strings, test) {
  // YOUR CODE HERE //
  for (let i = 0; i < strings.length; i++) {
    if (!test(strings[i])) {
      return false;
    }
  }
  return true;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
