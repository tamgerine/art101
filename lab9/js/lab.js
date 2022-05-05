/*Author: Tamara Basbuyuk
*Created: 05.01.2022
*License: Public Domain
*
*/

var outputEI = document.getElementById("output");
var new1EI = document.createElement("p");
var new2EI = document.createElement("h2");
console.log(outputEI);
new1EI.innerHTML ="hello, this is the output!";
new2EI.innerHTML ="This is the second output! =)"
outputEI.appendChild(new1EI);
outputEI.appendChild(new2EI);



//modifying the css through DOM elements (slide 28)
outputEI.style.color = "blue";

document.getElementById("lab9summary").style.marginLeft = "10px";

document.getElementById("lab9summary").style.color = "yellow";
