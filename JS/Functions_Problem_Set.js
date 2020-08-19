

console.log("isEven - takes a single numeric argument and returns true if even")

function isEven(num) {
  if (num % 2 === 0) {
    return "true"
  }
  else return "false"
}
// Refactored version, better:
function isEvenTwo(num) {
  return num %2 === 0;  //evaluates operation, returns the output
}


console.log("factorial - takes single numeric argument and returns factorial")
function factorial(num) {
  // factorial(4)=4*3*2*1
  // define a result variable:
  var result = 1;
  // calculate factorial and store value in result:
  for (var i = 2; i <= num; i++) {
    result = result * i;
    // result *= i; is the short version
    // initial: result (1) * i (2), 2nd: result(1*2=2)* i(2++ =3)
  }
    // return the result Variable
    return result;
  }
// Alternate version: Doesn't work for num(0)=1 case
function factorial(num) {
  // factorial(4)=4*3*2*1
  if (num === 0) {
    return 1;
  }
  // define a result variable:
  var result = num;
  // calculate factorial and store value in result:
  for (var i = num-1; i >= 1; i--) {
    result *=  i;
    // result *= i; is the short version
    // initial: result (num) * i (num-1), 4*3, 3*2
  }
    // return the result Variable
    return result;
  }


console.log("kebabToSnake - takes kebab-case string argument and returns snake_case")
function kebabToSnake(name) {
  // replace all '-' with "_"
  var newStr = name.replace(/-/g , "_"); //inside of / / is what we are searching for to replace
  return newStr;
}
