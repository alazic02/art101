/* UCSC; ART101 Fall 2021; Lab 7 - Functions.
 * Experiment with JavaScript functions to take user input
 *    and manipulate a string.
 * @author  Ariana Lazich and Marlene Lopez
 * @since   25 October 2021
*/

/*sortUserName - function that takes user/page viewer (string) input
  and sorts the letters*/
function sortUserName() {
  //userName; takes user input
  var userName = window.prompt("Tell me your name so I can make it better:");
    console.log("userName = ", userName); //test

  //arrayName; convert userName into array of letters
  var arrayName = userName.split('');
    console.log("arrayName = ", arrayName); //test

  //sort arrayName
  var sortedArray = arrayName.sort();
    console.log("sortedArray = ", sortedArray); //test

  //convert sortedArray back to string
  var sortedName = sortedArray.join('');
    console.log("sortedName = ", sortedName); //test

  //returns sorted string
  return sortedName;
};

// output; prints sorted user inputed name, returned from sortUserName
document.writeln("I've rearranged your name so that it's better now: ",
  sortUserName(), "</br>");
