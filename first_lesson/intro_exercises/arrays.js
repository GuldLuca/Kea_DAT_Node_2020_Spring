//Exercise 1

var letters = ["a", "b", "c"];

var getB = letters[1];

console.log(getB);

//Exercise 2

var friends = [];

var luca = {
    "name" : "Luca",
    "age" : 25
};

var rune = {
    "name" : "Rune",
    "age" : 41
};

var hedi = {
    "name" : "Hedi",
    "age" : 28
};

friends.push(luca, rune, hedi);

console.log(friends);

//Exercise 3

var significantMathNumbers = [0, 2.718, 3.14159, 1729];

var getIndex = significantMathNumbers.indexOf(1729);

console.log(getIndex);

//Exercise 4

var diet = ["tomato", "cucumber", "rocolla", "kale"]

diet.splice(diet.indexOf("kale"),0, 'hamburger', 'soda', 'pizza');

console.log(diet);

//Exercise 5

diet.pop();

console.log(diet);

//Exercise 6

var dinner = diet.slice();

console.log(dinner);

//Exercise 7

var letters = ["a","b","c", "d", "e", "f", "g", "h"];

for (i = 1;i < letters.length; i+=2){
    var element = letters[i];
    console.log(element);
}

//Exercise 8

var numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

var discardedNumbers = [];

numbers.forEach(element => {

if(element > 6 || element < 0){
    console.log(element)
}
else{
    discardedNumbers.push(element);
}
});

console.log(discardedNumbers);