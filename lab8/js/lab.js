/* UCSC; ART101 Fall 2021; Lab 8 - Anon Functions and Callbacks.
 * Experiment with JavaScript anonymous functions and callbacks.
 * @author  Ariana Lazich and Marlene Lopez
 * @since   28 October 2021
*/

// subtract function; takes in two arguments and subtracts them from each other
function subtract (x, y) {
  var results = x - y;
  return results;
};

// tests function
console.log("Test: 3 minus 4 is", subtract(3, 4));
  // should return 'Test: 3 minus 4 is -1'
console.log("Test: 26 minus 18 is", subtract(26, 18));
  // should return 'Test: 26 minus 18 is 8'

// array of numbers
var numbers = [2, 7, 5, 44, 46, 69, 36, 64, 118];
  console.log("My array of numbers:", numbers); // prints array

/* map function on numbers array
 * takes in array element for x and takes array index for y
 * ex. numbers[3] is 44 which means subtract(44, 3); result is 41
*/
var numMapped = numbers.map(subtract);
  // should return [2, 6, 3, 41, 42, 64, 30, 57, 110]
  console.log("My array subtracted:", numMapped);

/* anonymous function as callback with map
 * mulitplies x and y parameters; still uses element as x and index as y
 * ex. numbers[0] is 2 which means function(2, 0); result is 0
*/
var anonNum = numbers.map(function (x, y) {
  var results = x * y;
  return results;
});
  //should return [0, 7, 10, 132, 184, 345, 216, 448, 944]
  console.log("My array multiplied:", anonNum);
