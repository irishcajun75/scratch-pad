// #!/usr/bin/env node

'use strict';

/**
 * Create a factory function called `makeContact` that takes in `id`, `nameFirst`, and `nameLast`.
 * This function should returns a contact object "a simple object with three key-value pairs"
 * "A factory function manufactures and returns a brand new object every time you press its button
 *  (call it) instead of manually typing it out"
 * ex: makeContact(0, 'Max', 'Gaudin') // => { id: 0, nameFirst: 'Max', nameLast: 'Gaudin' }
 * Pseudocode: 1. Create and return a new object literal
 *              2. Assign the property 'id' to the passed in 'id' value
 *              3. Assign the property 'nameFirst' to the passed in 'nameFirst' value
 *              4. Assign the propert 'nameLast' to the passed in 'nameLast value
 */

function makeContact(id, nameFirst, nameLast) {
  // Solve this function first
  return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
  };
}

//let newContact = makeContact(1, 'Max', 'Gaudin');
//console.log(newContact);

var contacts = [
  {
    id: 1,
    nameFirst: 'Max',
    nameLast: 'Gaudin',
  },
  {
    id: 2,
    nameFirst: 'John',
    nameLast: 'Fraboni',
  },
  {
    id: 3,
    nameFirst: 'Alon',
    nameLast: 'Robinson',
  },
  {
    id: 4,
    nameFirst: 'Mykia',
    nameLast: 'Smith',
  },
  {
    id: 5,
    nameFirst: 'Alice',
    nameLast: 'Green',
  },
];

/**
 * Create a function called `findContact` that takes in an array of contact objects and a
 * fullName (ex: "Max Gaudin"). This function should return the contact object in the array
 * that matches the `fullName` input, or it should returned undefined if no object is found
 * matching.
 * PSEUDOCODE:
 *  1. Loop through each contact object in the array
 *  2. For each contact, combine its 'nameFirst' and 'nameLast' with a space in between
 *  3. Compare that full name string to the passed in 'fullName'
 *  4. If they match, return that specific contact object immediately.
 *  5. If the loop finishes and no match was found, return undefined.
 */

function findContact(array, fullName) {
  // Loop through the array of contact objects
  for (let i = 0; i < array.length; i++) {
    let contact = array [i];

    // Combine first and last name with a space
    let currentFullName = contact.nameFirst + ' ' + contact.nameLast;

    // Check if it matches the target fullName
    if (currentFullName === fullName) {
      return contact; // return the matching object immediately
    }
  }

  // If we searched the whole array and found nothing
  return undefined;
}
// Test passing case:
//let found = findContact(contacts, 'John Fraboni');
//console.log('Found contact:', found);

/**
 * Create a function called `removeContact` that takes in an array of contact objects and a
 * contact object to remove. This function search through the array and remove the contact object
 * if found.
 * Pseudocode:
 * 1.  Loop through the array of contact objects using their index numbers
 * 2.  Check ig the current contact matches the target contact (comparing their 'id' is safest)
 * 3.  If a match is found, use .splice() to remove 1 item at that index
 * 4.  Return true (or the modified array) to indicate it was removed, or break out of the loop
 */
function removeContact(array, contact) {
  // Loop through the array using index 'i'
  for (let i = 0; i < array.length; i++) {
    // Check if the current objects id matches the target contact's id
    if (array[i].id === contact.id) {
      // .splice(startIndex, deleteCount) removes 1 item at position 'i'
      array.splice(i, 1);
      return true; // Successfully removed
    }
  }
  return false; // contact wasn't in the array
}

/**
 * Create a function called `getNamesThatBeginWithLetter` that takes in an array of contact objects.
 * This function should iterate through the array and return a new array of all of the contact
 * objects whose first names begin with input letter
 * Pseudocode:
 * 1. Creat a new empty array to collect our matching contacts
 * 2. Loop through each contact object in the array
 * 3. Look at the first letterof the contact's 'nameFirst', or lowercase both to be safe
 * 4. If that first letter matches the input letter
 *    - push the contact object into our new array
 * 5. After the loop finishes, return the new array
 */
function getNamesThatBeginWithLetter(array, letter) {
  // 1. Create a container array to collect matches
  let results = [];
  // 2. Loop through every contact in the input array
  for (let i = 0; i < array.length; i++) {
    let contact = array[i];
    // Grab the first letter of nameFirst (index 0) and compare
    // .toLowerCase() makes it case insensitive
    if (contact.nameFirst[0].toLowerCase() === letter.toLowerCase()) {
      results.push(contact);
    }
  }
  // 4. Return our collected results array
  return results;
}

/**
 * Create a function called `getAllContactNames` that takes in an array of contact objects.
 * This function should return a string of each object's full name followed by a linebreak character.
 *
 * example:
 *
 *    getAllContactNames(contacts); // => 'Max Gaudin\nJohn Fabroni\nAlon robinson\nMykia Smith\Alice Green'
 * 
 * // Pseudocode
 * 1. Create an empty string variable, accumulator, to build the final list
 * 2. Loop through each contact object in the array
 * 3. For each contact, combine nameFirst + " " + nameLast + "\n" (line break)
 * 4. Add (concatenate) that full name string to our main string variable
 * 5. After the loop finishes, return the accumulated string
 */
function getAllContactNames(array) {
  // Start with an empty string to accumulate names
  let names = [];

  // 2. Loop through every conatct object
  for (let i = 0; i < array.length; i++) {
    let contact = array[i];
    names.push(contact.nameFirst + ' ' + contact.nameLast);
  }
  return names.join('\n');
}

    // 3. Combine first and last name with a space and a line break
  //  let fullName = contact .nameFirst + ' ' + contact.nameLast + '\n';

    // Add it to our total string
 //   allNames += fullName;
  
  //5. Return the finishedstring
 // return allNames;

//let namesList = getAllContactNames(contacts);
//console.log(namesList);


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
