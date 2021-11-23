/* UCSC; ART101 Fall 2021; Lab 13 - Loops.
 * Experiment with loops.
 * @author  Ariana Lazich
 * @since   22 November 2021
*/

// event listener to loopButton to execute fizzBang function
$("#loopButton").click(function(){
  console.log("button was clicked!"); // test
  fizzBang();
});

// function that loops through #s and print words for multiples of 3, 5, 7; if # is multiple, combine the words
var MAX = 200; // set highest number to loop through
function fizzBang () {
  for (var i = 1; i <= MAX; i++) { // starting at 1 to remove 0
    var str = ""; // empty string to concatenate to
    var mult3 = i % 3 == 0; // checks if multiple of 3
    var mult5 = i % 5 == 0; // checks if multiple of 5
    var mult7 = i % 7 == 0; // checks if multiple of 7

    if (mult3) { // multiple of 3
      str += "Fizz";
    }
    if (mult5) { // multiple of 5
      str += "Buzz";
    }
    if (mult7) { // multiple of 7
      str += "Boom";
    }
    if (str == "") { // not multiple of any
      str = i;
    }
    else { // adds '!' to end of str with words
      str +="!";
    }

    // append to 'output' div
    $("#output").append("<p>" + str + "</p>");
  }
};

// for loop referrenced from Wes's class live coding:
// https://replit.com/@wmodes/VelvetyBriskNetbsd#index.js
