function add(a,b){
    console.log(a+b)
}
var a=10
var b=20
add(a,b)

//scope
//global scope
 // Variables declared outside any function or block have global scope
var globalVariable = 10;

function globalFunction() {
  // This function has access to globalVariable
  console.log(globalVariable);
}

// Accessing the global variable outside the function
console.log(globalVariable); // Output: 10
