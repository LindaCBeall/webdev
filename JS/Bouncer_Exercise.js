// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("what is your age?"));

if (age<0) {
  console.log("error, please re-enter your age");
  //only printed if age<18
}

if (age === 21) {
  console.log("Happy 21st bday!");
}

// Alternate: if(age % 2 !== 0)
if (!(age % 2 === 0)) {
  console.log("your age is odd");
}

// If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
