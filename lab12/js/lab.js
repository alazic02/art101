/* UCSC; ART101 Fall 2021; Lab 12 - Conditionals.
 * Create a function that depends on conditionals.
 * @author  Ariana Lazich
 * @since   16 November 2021
*/

// attach event listener to HTML button w/ jQuery
$("#sortingButton").click(function(){
  // get value from input field
  var name = $("#input").val();
    console.log("user's name: ", name); // test
  // get length of user's name
  var nameLength = name.length;
    console.log("name's length: ", nameLength); // test
  // get trope
  var trope = tropeSorter(nameLength);
    console.log("user's trope: ", trope); // test
  // add trope to 'output' div
  $("#output").html("<p>Your assigned trope is: " + trope + "</p>");
});

// function that takes String, counts its letters, and assigns
// a variable depending on mod 4
function tropeSorter(str) {
  mod = str % 4; // uses % to get remainder with 4

  // if else statements that returns based on remainder (modulo)
  if (mod == 0) {
    return "Nerd";
  }
  else if (mod == 1) {
    return "Jock";
  }
  else if (mod == 2) {
    return "Goth";
  }
  else if (mod == 3) {
    return "Prep";
  };
};
