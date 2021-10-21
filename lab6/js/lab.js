/* UCSC; ART101 Fall 2021; Lab 6 - Arrays and Objects.
 * Experiment with JavaScript arrays and objects.
 * @author  Ariana Lazich and Marlene Lopez
 * @since   21 October 2021
*/

//array of main types of transport
var myTransport = ["car", "bus", "train", "bike", "scooter"];

//main ride object
var myMainRide = {
  type: myTransport[0],
  make: 'Honda',
  model: 'Civic',
  color: 'Red',
  year: 2012
};
//add age to myMainRide obj
myMainRide.age = 2021 - myMainRide.year + " years old";

//output
  //prints myTransport array
  document.writeln("Getting around: " +
                    myTransport[0] + ", " +
                    myTransport[1] + ", " +
                    myTransport[2] + ", " +
                    myTransport[3] + ", " +
                    myTransport[4] + "<br>"
                  );

  //prints myMainRide obj in curly brace, list format
  document.writeln("<p>My Main Ride's Specs: <pre>",
                    JSON.stringify(myMainRide, null, '\t'),
                    "<pre></p>");
