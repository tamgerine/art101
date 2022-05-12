/*Author: Tamara Basbuyuk
*Created: 05.11.2022
*License: Public Domain
*
*/

var challengeEL=$("#challenge");
var problemsEL=$("#problems");
var resultsEL=$("#results");

//function makes a button, appends it to element, button number is used as the text on the button and is appended to output, hexcode changes the color of the background
function makeButton(element, buttonNumber, hexCode){
  $(element).append($('<button />',{
    type : 'button',
    html : buttonNumber,
    id : 'button1',
    on : {
      click: function() {
        $("#output").append(" clicked " + buttonNumber+" ");
        $("#content").css({"background-color" : hexCode});
      }
    }
  }));
}

makeButton(challengeEL, "button 1", "#ff828b" );
makeButton(problemsEL, "button 2", "#FFA23A");
makeButton(resultsEL, "button 3", "#8DD7BF");
