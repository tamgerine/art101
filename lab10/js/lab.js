/*Author: Tamara Basbuyuk
*Created: 05.09.2022
*License: Public Domain
*
*/

//stolen code from lab 7
function nameSort() {
  var userName = document.getElementById('user-name').value;
  console.log("userName =", userName);
  //split string into array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  document.getElementById('output').innerHTML+= nameSorted;
  return nameSorted;
}
var button = document.getElementById('my-button');
button.addEventListener('click',nameSort);
