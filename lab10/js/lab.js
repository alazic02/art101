/* UCSC; ART101 Fall 2021; Lab 10 - JavaScript Events and Forms.
 * Experiment with JavaScript events.
 * @author  Ariana Lazich and Marlene Lopez
 * @since   3 November 2021
*/

// find button in HTML
var button = document.getElementById("my-button");

// attach event listener to button
button.addEventListener('click', function() {
  // get value from user input field in HTML
  inputValue = document.getElementById("user-name").value;
    console.log("user input: ", inputValue); //test

  // put value thru sortUserName()
  var newName = sortUserName(inputValue);

  // insert results into HTML 'ouput' div
    // find output in HTML
    var outputEl = document.getElementById("output");
      console.log("index.html 'output' div: ", outputEl); // test

    // add new name to new element in 'output' div
    var newNameEl = document.createElement("p"); // new <p>
      // add text to newNameEl
      newNameEl.innerHTML = "Here is your reordered name: " + newName;

    // append new element to 'output' div
    outputEl.appendChild(newNameEl);
});


// sortUserName - function that takes user input [String] and sorts the letters; originally from lab7
function sortUserName(userName) {
  // arrayName; convert userName into array of letters
  var arrayName = userName.split('');
    console.log("arrayName = ", arrayName); //test

  // sort arrayName
  var sortedArray = arrayName.sort();
    console.log("sortedArray = ", sortedArray); //test

  // convert sortedArray back to string
  var sortedName = sortedArray.join('');
    console.log("sortedName = ", sortedName); //test

  // returns sorted string
  return sortedName;
};
