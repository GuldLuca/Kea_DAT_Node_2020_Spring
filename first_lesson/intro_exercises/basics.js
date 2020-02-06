var firstName = "Luca";
var lastName = "Bastholm";

console.log("My first name is", firstName,  "and my last name is", lastName);

var year = "2020";
var number = 1;

var sum = Number(year) + number;
// var sum = +(year) + number;
// var sum = parseInt(year) + number;
// Number interprets variable year as a number, may result in NaN if the string dosen't contain a number
// parseInt parses any ints in the variable year as ints.

console.log(sum);