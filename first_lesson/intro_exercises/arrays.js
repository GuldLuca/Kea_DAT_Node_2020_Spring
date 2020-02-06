//Exercise 1

var letters = ["a", "b", "c"];

var getB = letters[1];

console.log(getB);

//Exercise 2

var friends = [];

friends.push({}, {}, {});

console.log(friends);

//Exxercise 3

var significantMathNumers = [0, 2.718, 3.14159, 1729];

var getIndex = significantMathNumers.indexOf(1729);

console.log(getIndex);

//Exercise 4

var diet = ["tomato", "cucumber", "rocolla", "kale"]

diet.splice(diet.indexOf("kale"),0, 'hamburger', 'soda', 'pizza');

console.log(diet);

//Exercise 5

diet.pop();

console.log(diet);