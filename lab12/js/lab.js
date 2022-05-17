/*Author: Tamara Basbuyuk
*Created: 05.12.2022
*License: Public Domain
*/
 function sortingHat(str) {
   console.log(str);
   //getting the length of the string
   strLen=str.length;
   console.log(strLen);
   //doing the modulo operation
   house=strLen%4;
   console.log(house);

   if (house==0) {
     return "Gyrffindor";
   } else if (house==1) {
     return "Hufflepuff";
   } else if (house==2) {
     return "Ravenclaw";
   } else if (house==3) {
     return "Slytherin"
   } else {
     return "error";
   }
 }

$("#button").on("click", function(){
  var userName = $("#input").val();
  console.log(userName);
  var house = sortingHat(userName);
  newText = "The Sorting Hat has sorted you into " + house + ".";
  $("#output").text($("#output").text().replace($("#output").text(),newText));
});
