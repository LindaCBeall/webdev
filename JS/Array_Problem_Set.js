


// printReverse () - takes array as argument
// --> prints out the elements in reverse order (but doesn't reverse array itself)

function printReverse(myarray){
for (var i = myarray.length - 1; i >= 0; i-- ) {
console.log(myarray[i]);
  }
}
// Result:
printReverse(["a","b","c","d"]);
// d
// c
// b
// a

// isUniform() - takes array as argument
// --> returns true if all elements in array are identical

// Don't use forEach for this --see below
function isUniform(myarray){
  var first = myarray[0];
  for (var i=0; i < myarray.length; i++){ //can start at i=1 to avoid first run
    if(myarray[i] !== first){
      return false
    }
  }
  return true;
}


function isUniform(myarray){
  var first = myarray[0];
  myarray.forEach(function(element){
    if(element !== first){
      return false; //This will ONLY exit out of the forEach built in function
      // problem: isUniform function is still running and will still print return true;
    }
  });
  return true;
}



// sumArray() - takes array of numbers
// --> returns sum of all numbers in array

function sumArray(myarray){
  var total = 0;
  myarray.forEach(function(element){
    total += element;
  });
  return total;
}

sumArray([10,10,10])
//30



// max() - takes array of numbers
// --> returns maximum number in array

function max(myarray){
  var max = myarray[0];
  for(var i=1; i < myarray.length; i++){ //can start at i=1 to avoid first run
    if(myarray[i] > max){
      max = myarray[i];
    }
  }
  return max;
}

// Using forEach: --couldn't get this one to work 
function max(myarray){
  var max = myarray[0];
  myarray.forEach(function(element){
    if(element > max){
      max = element;
  });
  return max;
}
