//single line comment
/*Multi-line or in-between comment*/


//1 - Numbers (first of 5 primitive, or basic, data types)
4.7
-10

//
//2 - Strings
//
"Hello world"
"43"
Either "" or '' but be consistent
"will accept a ' in between but ' ' wont"
To do a set of "" inside "", use /
"she said \"goodbye\""

"To see a \\" //will show only 1 "\", will hide 2nd


// Index (indexOf String of index) Versus Length !!!!!!!!!!!
var str = "hello world"
str.indexOf("h"); // 0
str.indexOf("e"); // 1
str.indexOf("l"); // only results in 2, even though it's 2 AND 3 AND 9
str.indexOf("d"); // 10
// Arrays in JavaScript are zero-based. JavaScript starts counting from zero when it indexes an array.
// Index value of first element in the array is “0” and the index value of the second element is “1”
str.indexOf("world"); //6
str.indexOf("yes"); //-1

// Reverse: find individual characters given index place using []
str[1];  // e

//!!!! Length is always 1 GREATER than index, starts counting at 1
str.length; // 11

//
//3 - Booleans
//
True
False

//
//4 - null = explicity nothing
//
var currentplayer = "charles"
currentplayer = null; //gameover

//
//5 - undefined = set but never given a vlaue
//
var age; //no value
age //responds: undefined
color //responds ReferenceError:color is not defined

----------------------------------------------------------

Modulo
10 % 3 = 1

Concatenation
"hi"+"goodbye"="higoodbye"

//
++ is the same as +=1
//
result = result * i;
result *= i; is the short version
//

quiz:
100 % 3  = 1
("blah" + "blah")[6]  =  a //starts count at 0
"hello".length % "hi\\".length = 5 % 3 = 2 //double \\ will only return hi\

----------------------------------------------------------

Variables
var yourVariableName = yourValue; //Can store all 5 types of data

var name = "Linda";
name = "Bob"//name is now Bob
"hello there " + name //= "hello there Bob"
name = 50 //can change data type (not all languages, but JS can)

camelCase
snake_case
kebab-case

var changed to let and const in 2018
const > let > var //in order of preference of use


// methods = variable that stores code instead of values
clear() //method to clear screen

alert ("hello there todd!"); //alert


//prompt - gets input from user - always returns a string by default
prompt("what is your name?");
//or
var username = prompt("what is your username?");
// Convert to a Number from string
var age = Number(prompt("what is your age?"));
// or clunkier
var stringAge = prompt"what is your age?");
var age = Number(stringAge);

//Can also convert on the backside when doing comparison or operations!!!
if (Number(age) === 21) {
  //enter operation here
}


//console.log
console.log("hello from the console")
----------------------------------------------------------

//Section 2 - Control Flow
//
//Boolean, Comparison operators (<, >, <=, ==, !=, ===, !==)
//
var x = 5;
x == "5" //True  Does type coercion
x != 4 //True
x === "5" //FALSE, not equal value AND type
//cares about value but also that one is a string and one is a number
//should always do === as default, much safer
var y = null;
y == undefined //TRUE
y === undefined //false
x !== "5" //TRUE !== not equal value or equal type

//
//Logical Operators
//
&& // And
x < 10 && x !== 5 //FALSE, true and false, both sides MUST be true or whole thing is false
|| // OR
y > 9 || x ===5 //TRUE
! //BANG -- Not, opposite
!(x === y) //True, b/c 5 is not equal to 9
//!(True statement)=False, !(False statement)=True

Weird special cases:
true == "1" //TRUE
0 == false //TRUE
null == undefined //TRUE
NaN == NaN //False NotANumber

//Some inputs are "Truthy" or "Falsey" (inherit a T/F value naturally)
//Falsy values: false, "", null, 0, undefined, NaN --all are only for JS, varies per language
//Everything else is "truthy": "Hello world", -1,
// Can check by using !!"hello world" to get double negate, or actual result

//
//Conditionals
//
// Can use Number to force it from string if didn't do it at prompt, otherwise will get === false
if (Number(age)<18) {
  console.log("sorry, you aint old nough");
  //only printed if age<18
}

else if (age > 18 && age < 21) {
  console.log("you can enter, but no drinking!");
}
// OR
else if (age <21) {
  console.log("you can enter, but no drinking!");
  //better b/c shorter: only way this will run is if 1st statment is false
}
else {
  console.log("common in!");
  //Last gatekeep, only runs if first two are false
}

//
// Loops
//infinite loop occurs when the terminating condition never returns false

DRY code = Don't Repeat Yourself
WET code = Write Everything Twice //(not as common as a saying)


//
// While Loops
//
while (true) {
  //code to be executed as long as (somecondition)=true
}

var str = "hello"; //string length = 5
// 1st character always counted as 0 for index (h= index 0, e= index 1, o= index 4)
//!!!! Length is always 1 larger than index of string
var count = 0;
while (count < str.length) { // 0 < 5
  console.log(str[count]);  //asks for character at Index = 0 (count initialized at 0)
  count++; //adds 1 to count- won't print until passes the while loop check again
// count += 2; Would increment by 2's
}
//"h"
// "e"
// "l"
// "l"
// "o"

// Annoy - o - mattic
var answer = prompt("Are we there yet?");

while (answer !== "yes") {
// while (answer.indexOf("yes") === -1) { Will end loop if "yes" is contained ANYWHERE in answer
// IndexOf will return a -1 if can't find characters in search
      var answer = prompt("Are we there yet?");
}
alert("Yay! We made it!")  //won't run UNTIL loop is over, so user MUST type "yes"


//
// For Loops - 3 things: Initialize, Condition, Step
//

// While loops: variable initialized OUTSIDE of loop
// For loops: variable init INSIDE loop (and doesn't exist outside)
for (var i = 0 /*initialize*/; i < array.length/*condition*/; i++/*step*/) {
  array[i]
  //code to run
}
// Printing numbers from 1-5
for (var count = 1; count < 6 /*will run until this is false*/; count++) {
  console.log(count);
}
// Variable name = count.  Most variable names =i (or j) b/c doesn't exist outside of loop


//Section 3 - Functions
//
//Variables store data, Functions store code (REUSABLE package)
//
// 1.Declare it first
Function doSomething() {
  console.log("Hello World");
}
// 2.Then call function later:
doSomething();

doSomething; //will return the code block back but WONT run it

 // Arguments - Functions that take inputs
 function square(num) {
   console.log(num * num);
 }
// Now when call square we NEED to provide a value
square(10); // 100


function greet(person1, person2, person3) {
  console.log("Welcome " + person1 + ", " + person2 + ", and " + person3);
}
greet ("bob", "sally", "fred");
// Welcome bob, sally, and fred
greet ("bob", "sally");
// Welcome bob, sally, and undefined
// JS will still run (other prog languages will throw error msg)


Examples:
addToScore(5); //game website to change score
checkCredentials("bob@gmail", "password");

//
// The Return Keyword - Allows capture value from print
//
// Input -> Function -> Output
function square(num) {
  return num * num; //only one return per function (1st statment unless if or else)
  console.log("goofy!"); //will not run, function stops execution after a return
  return num/2; //will not run
}
// Will see arrow in console log in google
// EVERY function will return something, if don't specify = undefined
// Can also return to a variable:
var result = square(4); // 16 stored inside result


Function Declaration and a Function Expression.
/*Can overwrite both types of functions? Yes
No matter how you name a function:
* directly in a function declaration
* with a variable in a function expression
Overwritten if assign that same variable to something else, later in your code.*/

// function Declaration
function capitalize(city) {
  return city.charAt(0).toUpperCase() + city.slice(1);
}

// function Expression
var capitalize = function(city) {
  return city.charAt(0).toUpperCase() + city.slice(1);
}

//
//Scope = context in which code is executed

When we define something var y = 100;, we still have access to that within a new function
If declare y first, change y value by defining funciton, y is unchanged
If declare y, change y w/in function, and THEN call function, y is updated globally
but
If declare y, THEN declare y w/in function (var y = ;), y is changed when calling function but remains the same otherwise

If var is used w/in function, not accessible outside of it

//
// Higher order Functions - allow us to pass functions to other functions
setInterval(functionName, interval/*in mili-seconds*/);
  //function that takes another function as it's input
  // don't use () like functionName() because WE are not calling it, we're letting setInterval call it

clearInterval(# provided in console.log when setInterval ran) to stop the setInterval execution

// If only a one-time functionName, and haven't written it yet:
setInterval(function () {
  //Enter functionName code here without using the name
  console.log("I am an anonymous function!")
}, 10);


//
//Section 4 - Arrays
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var friends = ["Charlie", "Liz", "David", "Mattias"];
// arrays are indexed starting at 0 -- Charlie-0, Liz-1, David-2, Mattias-3
console.log(friends[0]) // "Charlie"
friends[1]+ " <3" + friends[2] // "Liz <3 David"
friends[0] = "Chuck"; //to update an array item
friends[4] = "Amelie"; //to add a new item
// Chuck-0, Liz-1, David-2, Mattias-3, Amelie-4
friends[9] = "Bob" //JS will add in the empty slots
["Chuck", "Liz", "David", "Mattias", "Amelie", undefined x 4, "Bob"]
friends.length // 10 - similar to string length: length always one greater than index
2 ways to initialize an empty array:
var friends = [];
var friends = new Array(); //very uncommmon

var random = [49, true, "bob", null]; //can hold different types of data

//push and pop - to add or take from the END/last spot in array
var colors = ["red", "blue"];
colors.push("green"); // ["red", "blue", "green"]
colors.pop(); //["red"]
var col = colors.pop(); //returns the removed element = "blue"

//shift and unshift - to add/remove from FRONT/BEGINNING of array
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared") // ["infrared", "red", "orange", "yellow"];
colors.shift(); // ["orange", "yellow"];
var col = colors.shift(); // returns the removed element = red

var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];
friends.indexOf("David"); //2  Returns FIRST index at which a given element can be found
friends.indexOf("Liz"); // 1 NOT 4
friends.indexOf("Hagrid"); //-1 when element is not present

//Slice - to copy parts of an arrays - does NOT alter the array, just pulls the data
//from where data starts to where it ends NOT INCLUSIVE, need to go 1 number higher
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1,3); // citrus = ['Orange', 'Lemon']
var allFruits = fruits.slice(); // to copy the entire array, allFruits identical to fruits

//Nested arrays
var friendGroups = [
  ["Harry", "Ron", "Hermione"],
  ["Malfoy", "Crabbe", "Goyle"]
];
console.log(friendGroups[1][0]); // [outer array layer] [internal array]
// Retrieves the 0 index item from the 1 index group = Malfoy
friendGroups [1] //  ["Malfoy", "Crabbe", "Goyle"]

//Array Iteration - almost never use while loop
var colors = ["red", "orange", "yellow", "green"];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]); // index=3, length=4 so i < length
}

// example to convert comments submitted into HTML:
for (var i = 0; i < comments.length; i++) {
  makeCommentsHTML(comment[i]);
}

//ForEach - JS built-in to iterate - newer
//takes callback function, is expected to have at least 1, but up to 3, arguments specific order:
// 1-  each element in the array (per loop iteration) that .forEach was called on.
// 2 - the index of said element.
// 3 - the array that .forEach was called on (it will be the same for every iteration of the loop).
// Anonymous function:
[1,2,3].forEach(function(el, i, arr) {
  console.log(el, i, arr);
});
//OR pre-written, named function:
function logNums(el, i, arr) {
  console.log(el, i, arr);
}
[1,2,3].forEach(logNums); //!!!DON"T do (logNums())- it's forEach's job to call it

var colors = ["red", "orange", "yellow", "green"];
colors.forEach(function(color) {
  console.log("My favorite color is " + color);
});
//My favorite color is red
//My favorite color is Orange
//My favorite color is yellow
//My favorite color is green

var numbers = [1, 2, 3, 4, 5, 6];
var colors = ["red", "orange", "green"];
numbers.forEach(function(color) { // trick b/c colors != color array
  if(color % 3 === 0) { // annon function created inside forEach
    console.log(color);
  }
});
// 3, 6

//
//Secion 5 - Objects

// Array:
var person = ["cindy", 32, "Missoula"]; //but not related to each other
person[2] //to get hometown, not meaningful code

// Objects use {} instead of [array]
// Unlike arrays, Objects HAVE NO ORDER, just floating around
// Can use objects inside of arrays, and arrays inside of objects
Can hold all types of data, even arrays and other objects
var person = {
  name: "Cindy", //can do all in one line, convention is to break out into separate lines
  age: 32,
  city: "Missoula",
  friends: ["Bob", "Cathy"], // array
  isNice: true, //boolean
  pets: { // object
    name: "Rusty",
    species: "Dog",
    age: 2
  },
  add: function(x,y){ //FUNCTION - see Object Methods section below
    return x + y;
  }
};
person // type in console to see object info
person.add(10,5); //15  CANNOT just call add(), must call object first

// Retrieving Object Data: 2 Options:
// Option 1: Bracket notation (similar to arrays):
console.log(person["name"]);
// You can lookup using a Variable:
var str = "name";
someObject.str //Doesn't look for "name"
someObject[str] //Evaluates str and looks for "name"

// Option 2: dot notation:
console.log(person.name);
// You CANNOT use dot notation if property starts with a number:
someObject.1blah //INVALID
someObject["1blah"] //ok
someObject._name = "Bob" //ok, stores value: "Bob" w/ key: _name
// You CANNOT use dot notation for property names with spaces:
someObject.fav color //INVALID
someObject["fav color"]; //ok


// Updating Data: 2 Options:
person["age"] += 1; //Option 1: Bracket notation- Cindy's age is now 33
person.city = "London"; //dot notation

// 3 Ways to initialize object:
var person = {} // 1 - empty bracket
// add elements later:
person.name = "Travis";
person.age = 21;
person.city = "LA";

var person = { // 2 - add all at once
  name: "Travis",
  age: 21,
  city: "LA"
};

var person = new Object(); // 3 - new Object is a function similar to: new Array();
person.name = "Travis";
person.age = 21;
person.city = "LA";
};


// Arrays v objects
Array - created and bound in very specific order, starting at index 0
Object - NOT a list, more of a dictionary, key value pairs
// arrays specific kind of object: key value pair (key: value), 0: valueAtIndex0

// Array
var dogs = ["Rusty", "Lucky", "Bubba"];
dogs // ["Rusty", "Lucky", "Bubba"]
// Object
var dog = {
  name: "Rusty",
  breed: "Lab"
}
dog // Object {name: "Rusty", breed: "Lab"}

// Retrieving data:
// Array:
dogs[1]; //"Lucky"
// Object:
dog["name"] // "Rusty"
dog.name // "Rusty"

// To add data:
// Array -- need to specify where data is added in (push v unshift)
dogs.push("Wyatt") //["Rusty", "Lucky", "Bubba", "Wyatt"]
// Object
dog["age"] = 6; // Object {name: "Rusty", breed: "Lab", age: 6}
dog.age = 6;

// To change data:
// Array
dogs[1] = "Lucy" //["Rusty", "Lucy", "Bubba", "Wyatt"]
// Object
dog.breed = "Black Lab" // Object {name: "Rusty", breed: "Black Lab", age: 6}

// Using Objects inside of Array:
var posts = [ //posts has a length = 2
  {
    title: "Cats are mediocre",
    author: "Colt",
    comments: ["Awesome post!", "Terrible post!"] //Array inside of object inside of array
  },
  {
    title: "Cats are actually awesome",
    author: "Cat Luvr",
    comments: ["<3", "I hate you!"] //Array inside of object inside of array
  }
]
posts[0].title // "Cats are mediocre"
posts[1] // Object {title: "Cats are actually awesome", author: "Cat Luvr", comments: Array[2]}
posts[1].comments // ["<3", "I hate you!"]
posts[1].comments[1] // "I hate you!"

// Array inside of object
// Exercise: Retriev "Malfoy" from someObject:
var someObject = {
  friends: [      //array with 3 objects
    {name: "Malfoy"}, //object with only one key/value pair
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};

someObject["friends"][0].name  //can technically leave off .name b/c only has one value in object
someObject.friends[0].name

// movieDB exercise - Create array of movie objects.
// Each should have Title, Rating, and hasWatched boolean prop
var movieDB = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
  }
];
movieDB.forEach(function(movie){ //for annon function
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
})

// You have watched "In Bruges" - 5 stars
// You have not seen "Frozed" - 4.5 stars
// You have watched "Mad Max Fury Road" - 5 stars

// To clean it up:
function buildSentence(movie){ //for input of "movie", needs to do following:
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result; //different from the console.log above
  //return will be made each time function is called (number of items in array)
}
movieDB.forEach(function(movie){
  //each item in array will be called "movie" and cycled through function below:
  console.log(buildSentence(movie));
});

// Objects -- methods
//
// Regular function:
function speak(){
  return "Woof";
}
speak(); // "Woof"
// Function for cat/meow?
//Causes a "namespace" collision, store in different objects so don't conflict
var dogSpace = {};
dogSpace.speak = function() {
  return "Woof";
}
dogSpace.speak() // "Woof"
var catSpace = {};
catSpace.speak = function() {
  return "Meow";
}
catSpace.speak() // "Meow"

// Real world example -- backend programming:
// comment.delete, user.delete, post.delete


// Underscore.js.org - functions that someone else has written
Everything begins with _:
_.find(list, predicate, [context])


// Keyword this -- INterview questions (events, Jquery, databases)
//
var comments = {};
comments.data = ["Good job", "bye", "lame.."];

// Option 1
function print(arr){ //arr is a user input.
  // When function(something, something), must enter function(mydata, otherdata) when call it
  arr.forEach(function(el) {
    console.log(el);
  });
}
print(comments.data); //to get function to run
//comments.data = arr

// "this" method:
// "this" INSIDE of method(print?) refers it to the Object(comments) that the method was defined in
comments.print = function /*print removed b/c not needed*/(arr){
this.data.forEach(function(el) { //this refers to the Object comments
    console.log(el);
  });
}
comments.print //will print out the 3 comments

//
// Section 6 - DOM - Document Object Model
// Interface b/w Javascript and HTML+CSS
//

JavaScript code at the bottom of the HTML document, right before  </body>  tag.
The HTML will need to have loaded before the JavaScript is run,
otherwise the JavaScript will throw an error because
the HTML that it is trying to select and manipulate doesn't exist (yet).

<script src="scriptfile.js"></script>
</body>

console.dir(document); //most developers only use like 10% of document

// SELECT and then MANIPULATE, similar to CSS (selector and then property to change)
var h1 = document.querySelector("h1");//select
h1.style.color = "pink";//manipulate

n the following lecture about "Important Selector Methods",
Colt mistakenly refers to the array-like object that comes back from
document.getElementsByClassName() as a "NodeList", when in fact it is an HTMLCollection.
While they are similar, there are some differences between them

In Chrome JS Console:
document.URL;
document.head;
document.body;
document.links;

// 5 Methods for Selecting Elements:

document.getElementById("idname") //returns an OBJECT representation of HTML
document.getElementsByClassName("bolded")
document.getElementsByTagName("li") //"li", "h1", "body", "head", etc
document.querySelector() //returns FIRST element that matches a given CSS-style selector, does all types
  document.querySelector("#highlight") //id = "highlight"
  document.querySelector(".bolded") //class = "bolded"
  document.querySelector("h1") // tag type (li, h1, body, etc)
  document.querySelector("li a.special") //selects all anchor tags <a> inside a <li> with the class=special
  // <result>
document.querySelectorAll() //returns list of elements that match CSS-style selector
  // [<result1>
  //   <result2>]

Returns a HTMLCollection=lightweight array
var tags = document.getElementsByClassName("bolded");
tags //returns the following as string representation BUT actually an OBJECT
// <li class="bolded">List Item 2</li>,
  // <li class="bolded">List Item 3</li>,]
tags[0] //can still access index item
tags.length //2
tags.forEach() //INVALID

console.dir(tags[0]) //returns a long list of object properties

// Exercise: 4 different ways to select the first <p> line:
// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8">
//     <title>My Title</title>
  </head>
  <body>
    <h1>I am an h1!</h1>
    <p id="first" class="special">Hello</p>
    <p class="special">Goodbye</p>
    <p>Hi Again</p>
    <p id="last">Goodbye Again</p>
  </body>
</html>
// To select first line:
document.getElementById("first");
document.querySelector("#first"); //#id, .class
// Other ways slightly less efficient:
document.getElementsByClassName("special")[0]; //to only get first result
document.getElementsByTagName("p")[0];
document.querySelector(".special"); //special class
document.querySelector("p"); //will just return 1st one automatically
document.querySelectorAll(".special")[0]; //
document.querySelectorAll("p")[0];
// to be a little extra, do first-of-type, etc:
document.querySelector("h1 + p"); //to select all <p> tags adjacent to an <h1> tag
