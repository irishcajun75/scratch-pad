// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work? "No, typeof will not work because arrays are technically objects,
 * if you run typeof [], javascript returns 'object' because plain objects 
 * also return 'object' typeof cannot tewll them apart
 *
 * HINT: There is a method that can help with this.
 *  "Array.isArray(value) --> it returns true if the passed
 *  value is an array, and false for everything else including plain objects,
 *  null, numbers, strings, etc"
 */
function isArray(value) {
  // YOUR CODE HERE //
  return Array.isArray(value);



}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 * isObject({ a: 1, b: 2 }); // true
 * isObject([1, 2, 3]); // false
 *
 */
function isObject(value) {
  // YOUR CODE HERE //
  return value !== null &&
          typeof value === "object" &&
          !Array.isArray(value) &&
          (value.constructor === Object || value.constructor === undefined);

        
}
console.log(isObject({ name: "Alice", age: 29 })); // true

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
  // YOUR CODE HERE //
  return isArray(value) || isObject(value);
}

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
  // YOUR CODE HERE //
  if (Array.isArray(value)) {
    return "array";
  }
  if (value === null) {
    return "null";
  }
  if (value instanceof Date) {
    return "date";
  }
  return typeof value;
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
