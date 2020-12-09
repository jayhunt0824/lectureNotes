// /* Functions: 

// -JavaScript functions are defined with the function keyword, and can be written as a function
// declaration or a function expression. 

// - Function declarations are hoisted in our code, and run ONLY when we call them(invoke them)
// so any function in our code sits and waits to be ran until we call it by name. 
// Think of it as a student with his or her hand up, waiting to be asked a question. That student does not ask question until the 
// teacher calls upon them. 

// -function expressions are not hoisted, and are generally stored in variables. 

// -functions without names are known as annonymous functions. 
// */

// //function declaration 

// function sayHello(){
//     console.log("Hi");
// }

// sayHello();

// // Function expression - functions stored inside of variables

// let greeting = function (){
//     console.log("Hello");
// }

// greeting();

// /*Parameters

// -Think of parameters as a newly declared variable that we have not given a value to yet. 
// (like a placeholder)

// -The value that we pass into our function when we call the function to run (which is known as an 
//     argument), is the value that gets assigned to the parameter. 
// -general naming convention for function parameters: the parameter should be named something related to the information 
// we are passing into the function. If were passing in an integer, we may name our parameter num or number. 

//  */   

//  //husky is the placeholder. whenever we invoke myDog function and supply something in the () Husky
//  //will take the value of whatever we place in. 

//  //function is reusable use of code

// //  function myDog(husky){
// // console.log(`My dogs name is ${husky}`);
// //  }

// //  myDog("ace"); //"ace" is the argument. Huskey is the parameter
// //  myDog("princess");

//  function allMyDogs(smallHusky, bigHusky, borderCollie){
//      console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`);

//  }

//  allMyDogs("Mira", "Luna", "Charlie");



// /* Return of functions

// -functions can also manipulate the data sent to them, and return a new value*/

// //totalWeight is the variable in the below function
// //.Math.Round rounds to nearest number

// //-Code below the return does not get executed

// function calculator(one, two, three){
//     let totalWeight = one + two + three;
//     let average = Math.round(totalWeight / 3);
//     return average;
// }

// let averageWeight = calculator(15, 60, 55); //get nothing bc we havent returned anything
// console.log(averageWeight);

// /*

// Arrow Functions

// // // - Arrow FUnctions (or fat arrow functions) were introduced in eS6. They are basically just a more concise way to write function expressions, not function declarations. 
// // // -This means that arrow funtions do Not get hoisted. 
// // // -There are two types of arrow functions: concise body and block body. 
// // //     -The return happens automatically with a concise body arrow function. 
// // //     -The return does not happen automatically with a block body arrow function. 
// // // */

// // // //Concise body arrow function

// // // // let speak = (name) => console.log(`${name} goes woooooof`);
// // // // speak("Luna");

// // // let nameJoiner = (first, last) => `${first} ${last}`;
// // // let fullName = nameJoiner("Jen", "Hunt");
// // // console.log(fullName);

// // // //block body
// // // let speaks = () => {
// // //     console.log(`${name}` goes wooof`)
// // // }
// // //return does not happen automatically in block body

// // let nameJoiner =  (first, last) => {
// //     `${first} ${last} `;
    
// // }

// // let fullName = nameJoiner("jen", "hunt");
// // console.log(fullName);



// //practice 1

// // PRACTICE I
// // Write a function that takes two parameters  (Length and Width) that returns
// // the area of the rectangle.
// // Create a variable named area1 and area2 that will call the Function and store its return
// // console log the variables
// // Example :  4 by 8 rectangle will give  32;

// function rectangleArea(length, width){
//     let area= length * width;
//     return area;
// }

// let area1 = areaCalculator(4,8);
// let area2 = areaCalculator(10,2);

// console.log(area1);
// console.log(area2);

// Practice II
// Write a functio;version  - Human Age = (Dog Age -2) x 4 + 21

function humanYears(dogAge){
    return (dogAge-2) * 4 +21;
    
}

console.log(dogToHumanYears(4));

