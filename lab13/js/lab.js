/*Author: Tamara Basbuyuk
*Created: 05.18.2022
*License: Public Domain
*/

function fizzBuzzBoom(loops,factor1,factor2,factor3,factor4,string1,string2,string3,string4) {
  //typecasting number of loops cause js is weird
  var iterations =Number(loops);
  iterations+=1;
  //foor loop checking and appending and print
  for (var i = 1; i < iterations; i++) {
    var str="";
    if((i%factor1)==0){
      str +=string1;
    } if ((i%factor2)==0) {
      str +=string2;
    } if ((i%factor3)==0) {
      str +=string3;
    } if ((i%factor4)==0) {
      str +=string4;
    }
    var bool = (str=="");
    if (!bool) {
      str+="!<br>"
      $("#output").append("<p>" + i +" " + str + "</p>");
    }
  }
  return;
}
//get all the user inputs and run the function
$("#button").on("click", function(){
  var loop =$("#loop").val();
  console.log(loop);
  var fac1 = $("#f1").val();
  var fac2 = $("#f2").val();
  var fac3 = $("#f3").val();
  var fac4 = $("#f4").val();
  var str1 = $("#s1").val();
  var str2 = $("#s2").val();
  var str3 = $("#s3").val();
  var str4 = $("#s4").val();
  fizzBuzzBoom(loop,fac1,fac2,fac3,fac4,str1,str2,str3,str4)
});
