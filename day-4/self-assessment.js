/*
Create a function called countGreaterThanFour that takes in an array of strings.
This function should return the number of strings in the input array that have
a length greater than 4. If the input array is not an array, return 0.

In your implementation, breakdown the IOCE in detail and pseudocode every step.

I: an array containing strings [ cat, elephant, banana, dog]
O: a number representing how many strings in the array have a length greater than 4
C: check string length with the .length property
E: If the input is not an array return 0 immediately, if the array is empty [], return 0, 
      words with exactly 4 letters should not be counted

   //   Pseudocode:
//1. Check if the input is NOT an array using Array.isArray()
   //   - if false, return 0 immediately
//2. create a counter variable initialized to 0



example output:

      countGreaterThanFour(['hello', 'world', 'we', 'are', 'strings']); // => 3
*/

function countGreaterThanFour(array){
  // Edge case: Check if the input is NOT an array
  if (!Array.isArray(array)) {
      return 0;
  }

  // counter to keep track of strings with length > 4
  let count = 0;

  // Loop through the array
  for (let i = 0; i < array.length; i++) {
      // check if the current strings length is strickly greater than four
      if (typeof array [i] === 'string' && array[i].length > 4) {
            count++;
      }
  }

  // return the total count
  return count;
}
