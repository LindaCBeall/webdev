

var todos = ["buy new turtle"];

window.setTimeout(function() {
  // put all of your JS code from the lecture here


var input = prompt("What would you like to do?");


while (input !== "quit") {

  if (input === "list") {
    listTodos();
  } else if (input === "new"){
    addTodo();
  } else if (input === "delete"){
    deleteTodo();
  }
  // ask again for new input
  input = prompt("What would you like to do?");
}
console.log("Thanks for using the app!");

function listTodos(){
  console.log("******")
  todos.forEach(function(todo, index){
    console.log(index + ": " + todo);
  });
  console.log("******")
}

function addTodo(){
  var newTodo = prompt("Enter new todo item");
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo(){
  var index = prompt("Enter index # of todo item to delete");
  todos.splice(index,1); //splice(starting point, # of items to delete after)
  console.log("Deleted Todo");
}

// **NOTE: won't be able to see changes in console log until you say "quit"!!!!



}, 500);

//  jQuery in latter sections which has a cool $('document').ready()  function
// use in place of the window.setTimeout workaround mentioned above.
//
//
// Note, if you want to be able to access the todos variable from the chrome developer console
// then you'll need to put it in the global scope, see example below:
//
// var todos = ["Buy New Turtle"];
// window.setTimeout(function() {
//   // put all the rest of your JS code from the lecture here
// }, 500);
// If you include the todos array inside of the window.setTimeout() function then
// it's scope will be local to the anonymous function (callback) and
// you won't be able to access it from the chrome console.
