
var primereleague={
    "Topscorer":"Haaland",
    "Topassist":"DeBruyne"
}
primereleague["Redcards"]="Harry Maguire"
console.log(primereleague)
console.log(primereleague['Topassist'])
console.log(primereleague.Topscorer)


let mySet = new Set([1, 2, 3]);

// Iterate over the Set using forEach
mySet.forEach(value => {
  console.log(value);
});

// Iterate over the Set using for...of loop
for (let value of mySet) {
  console.log(value);
}

mySet.forEach(value=>{
    console.log(value);
});



// Creating an empty Map
let myMap = new Map();

// Creating a Map with initial key-value pairs
let myMapWithValues = new Map()
myMap.set('name', 'John');
myMap.set('age', 25);
myMap.set('phone', '9874563210');
myMap.set("id", 193);

console.log(myMap.get('name')); // Output: John
console.log(myMap.get('age'));  
console.log(myMap.get('phone'));
console.log(myMap.get('id')); 

myMap.delete('phone')

console.log(myMap.get('name')); // Output: John
console.log(myMap.get('age'));  
console.log(myMap.get('phone'));
console.log(myMap.get('id'));  
  






