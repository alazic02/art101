/* UCSC; ART101 Fall 2021; Lab 15 - AJAX.
 * Experiment with jQuery and AJAX.
 * @author  Ariana Lazich
 * @since   30 November 2021
*/

// event listener for random number trivia
$("#num-triv").click(function() {
  console.log("number trivia was clicked!"); // test
  callNumTriva();
});
// event listener for random date fact
$("#date-fact").click(function() {
  console.log("date factoid was clicked!"); // test
  callDateFact();
});

// function to call AJAX and get random number trivia
function callNumTriva() {
  // using core $.ajax() method
  $.ajax({
    // API endpoint
    url: "http://numbersapi.com/random",
    // any data to send
    //data: {id: "random"},
    // POST or GET request
    type: "GET",
    // data type to expect back
    //dataType: "json",
      /* kept getting a 'parsererror' so I looked on Stackoverflow and was told
       * to remove the expected data type which fixed it and let me call from
       * numbersapi; see:
       * https://stackoverflow.com/questions/5061310/jquery-returning-parsererror-for-ajax-request
      */
  })

  // request succeeds
  .done(function(data) {
    console.log("Success!"); // test
    // add data to 'output' div
    $("#output").html("<p>" + data + "</p>");
  })
  // request fails
  .fail(function(request, error) {
    console.log("Something went wrong: ", request, error); // test
  })
}

// function to call AJAX and get random date trivia
function callDateFact() {
  $.ajax({
    url: "http://numbersapi.com/random/date",
    type: "GET",
  })
  // request succeeds
  .done(function(data) {
    console.log("Success!"); // test
    // add data to 'output' div
    $("#output").html("<p>" + data + "</p>");
  })
  // request fails
  .fail(function(request, error) {
    console.log("Something went wrong: ", request, error); // test
  })
}
