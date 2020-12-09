/*
variables

1-grammarAndTypes
    02-declarations.js
*/

//what is a variable?
var a=1;
var b=2;
console.log(a+b);

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot coem first
//3) JavaScript is case sensitive--'hello' and 'Hello' are different variables

/*
Declarations, initializations, assignment
*/

/* Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value. This can be after initilization.
*/

var x;
console.log('Declaration 1:', x); //undefined 

x=10;
console.log('initilization 1:',x); //10

x=33;
console.log('assignment 1:', x); //33

var y;
console.log(y);

y= 'hello';
console.log(y);

y= 'you are my fren';
console.log(y);

/*
var, let, and Const:

Var = 'old' keyword for variables
let = 'new' keyword for variables (introduced with Es6)
const = also 'new', declares unchangeable varibales
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);


//objects
/* what is an object?
 an object is a container that stores property names and their value
 (it can hold multiple datea types)

 denoted by {}
 have keys and values-color (key):'blue' (value).

seperated with a colon, each key-value-pair is separated with a comma. 

*/

let hulk= {
    color: 'green', 
    age: 42,
    isStrong: true

}


//arrays

/* Arrays stores multiple values in an ordered way.


Denotred by []
has values of ('blue', 'green', 'yellow'), seperated by commas. 

*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush']
// array indexing
// first value starts at 0, 1, 2, 3, ...

console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]);

