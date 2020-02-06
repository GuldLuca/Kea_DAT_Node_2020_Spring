// Exercise 1
var numberOne = "1.10";
var numberTwo = "2.30";

var sum = +numberOne + +numberTwo;

console.log(sum);

//Exercise 2
var decimal_sum = sum.toFixed(2);

console.log(decimal_sum);

//Exercise 3
var one = 10;
var two = 45;
var three = 98;

var average = (one + two + three)/3;

var decimal_sum_two = average.toFixed(5);

console.log(decimal_sum_two);

//Exercise 4

var letters = "abc";

var getLetter = letters[2];

console.log(getLetter);

// Exercise 5

var fact = "You are learning javascript!";

//var newFact = face.replace("j", "J");

var getChar = fact.charAt(17)

var upperCaseChar = getChar.toUpperCase();

var newFact = fact.replace(getChar, upperCaseChar);

console.log(newFact);
