/* UCSC; ART101 Fall 2021; Lab 11 - Libraries & jQuery.
 * Experiment with jQuery.
 * @author  Ariana Lazich
 * @since   9 November 2021
*/

// add buttons to challenges, problems, and results divs in HTML; Task 2
  // find 'challenges' div
  var chalEl = $("#challenges");
    console.log("challenges div: ", chalEl); // test
  // create + append button
  chalEl.append("<button id='chalButton'>Button no.1</button>");

  // find 'problems' div
  var probEl = $("#problems");
    console.log("problems div: ", probEl); // test
  // create + append button
  probEl.append("<button id='probButton'>Button no.2</button>");

  // find 'results' div
  var resEl = $("#results");
    console.log("results div: ", resEl); // test
  // create + append button
  resEl.append("<button id='resButton'>Button no.3</button>");


// add event listeners to each button that change the CSS style of the div; Task 3
  // 'challenges' div
  chalEl.click(function() {
    console.log("chalButton clicked!"); // test
    // toggle class 'special' for 'challenges' div
    chalEl.toggleClass("special");
  });

  // 'problems' div
  probEl.click(function() {
    console.log("probButton clicked!"); // test
    // toggle class 'special' for 'problems' div
    probEl.toggleClass("special");
  });

  // 'results' div
  resEl.click(function() {
    console.log("resButton clicked!"); // test
    // toggle class 'special' for 'results' div
    resEl.toggleClass("special");
  });

// change 'lablink' div to have class 'special'
$("#lablink").addClass("special");
