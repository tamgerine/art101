/*
*Author: Tamara Basbuyuk
*Created: 05.01.2022
*License: Public Domain
*Program written to operate on a number array
*/
function square (x){
  return x*x;
}

 //test function
console.log("What is the square of 1", square(1));
console.log("What is the square of 2", square(2));

array = [100, 81, 4, 16, 42, 144, 10001];
console.log("My array", array);

var result = array.map(square);
//should return the squares
console.log("Square the array", result);

var result = array.map(function(x) {
  return x ** 0.5;
});
//should return the squareroot of the array
console.log("squareroot of array", result);

var mapResults = "Original array:" + array + ",</br> Square of array:" + array.map(square) + "</br>, Squareroot of array:" + result;
console.log(mapResults);
