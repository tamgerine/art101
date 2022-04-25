/*
* Author: Tamara Basbuyuk <tbasbuyu@ucsc.edu>
* Created: 25 April 2022
* License: Public Domain
*/

//define variables
var myTransport = ["Toyota Prius", "My Legs", "Buses", "rides from friends", "uber"];

var myMainRide = {};
myMainRide.make = "Toyota";
myMainRide.model = "Prius";
myMainRide.color = "White";
myMainRide.year = 2006;
myMainRide.age = 2022 - myMainRide.year;

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My myMainRide <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
