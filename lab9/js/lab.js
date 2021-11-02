/* UCSC; ART101 Fall 2021; Lab 9 - JavaScript for the Web.
 * Experiment with DOM maniuplation.
 * @author  Ariana Lazich and Marlene Lopez
 * @since   1 November 2021
*/

// DOM (Document Object Model); object-oriented rep. of whole web page
// vars with 'Element' or 'El' remind that it's an element

// finds the HTML element by ID; 'output' <div> from index.html
var outputEl = document.getElementById("output");
  console.log("index.html 'output' div: ", outputEl); // prints entire HTML 'output' <div>

// ceate new Elements for the 'output' <div>
var new1El = document.createElement("p"); // new <p>
  // add text inside <p></p>
  new1El.innerHTML = "This is the first paragraph in my newly created < p > " +
                     "element, added to the index.html through my lab.js file!" +
                     " It's pretty cool what JavaScript can do.";
    console.log("new <p> 1: ", new1El); // prints new1El as appears in <p>

var new2El = document.createElement("p"); // new <p>
  // add text inside <p></p>
  new2El.innerHTML = "This is the second paragraph in my new < p > element." +
                     " It was also added through my lab.js file instead of " +
                     "the index.html file. Open the console to see the HTML " +
                     "output div, with these both included.";
    console.log("new <p> 2: ", new2El); // prints new2El as appears in <p>

// append the new elements to the 'output' <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// change CSS of some elements
// sources: https://www.w3schools.com/jsref/dom_obj_style.asp, https://www.w3schools.com/cssref/css_colors.asp
outputEl.style.borderStyle =  "double dotted double"; // add border to the 'output' div
outputEl.style.paddingLeft = "15px"; // padding to left
outputEl.style.paddingRight = "15px"; // padding to right
outputEl.style.backgroundColor = "#383B4B";
outputEl.style.color = "#E6E6FA";

new1El.style.fontFamily = "Georgia"; // change font
new2El.style.fontFamily = "Garamond"; // change font

/* UNUSED TEXTNODE CODE
 * createTextNode necessary to actually have any text show up
 * source: https://www.w3schools.com/jsref/met_document_createtextnode.asp
 *
 * var new1ElToText = document.createTextNode(new1El); // make new1El into textNode
 *
 * var new2ElToText = document.createTextNode(new2El); // make new2El into textNode
 */
