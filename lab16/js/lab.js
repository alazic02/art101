/* UCSC; ART101 Fall 2021; Lab 16 - JSON and APIs.
 * Experiment with processing JSON from an API.
 * @author  Ariana Lazich
 * @since   1 December 2021
*/

callXKCDcomic();

// function that calls AJAX to retrieve data from XKCD API
function callXKCDcomic() {
  // core $.ajax() method
  $.ajax({
    // API endpoint
    url: "https://xkcd.com/info.0.json", // most recent XKCD comic; https://xkcd.com/json.html
    // data to send
    //data: {},
    // POST or GET request
    type: "GET",
    // data type expected back
    dataType: "json",
  })

  // request succeeds; data passed back
  .done(function(data) {
    console.log("Data successfully gathered!"); // test
    // save data as a var
    var comicObj = data;
      console.log("Comic Object: ", comicObj); // test

    // get comic's title
    var title = comicObj.title;
      console.log("Title: ", title); // test
    // add comic title to 'output' div
    $("#output").prepend("'" + title + "'" + "<br><br>");

    // make image tag
    var imgTag = "<img src='" + comicObj.img + // image url
                 "' title='" + comicObj.title + // image title
                 "' alt='" + comicObj.alt + // image alt text
                 "'>";
      console.log("Image Tag: ", imgTag); // test
    // add comic image to 'output' div
    $("#output").append(imgTag);
  })

  // request fails
  .fail(function(request, error) {
    console.log("Something went wrong: ", request, error); // test
  })
}
