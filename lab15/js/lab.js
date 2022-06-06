/*Author: Tamara Basbuyuk
*Created: 05.18.2022
*License: Public Domain
*/


var endpoint = "http://numbersapi.com/random/date/";

function getAjax() {
    $.ajax({
      url: endpoint,
    type: "GET"
  })
  .done(function(data){
      $("#output").html(data);
  })
  .fail(function(request, error){
      $("#output").html("Something fucked up.");
  })
}

$("button").click(getAjax);
