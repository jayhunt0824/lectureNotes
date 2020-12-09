/*

Arrays

what is an array?
// has [] brackets
// can hold multiple datatypes
// arrays can list datatypes in an ordered, numbered way

// */

// let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Ryan,"Iesha"]];
// //hidden keys: 0           1           2       3 

// // console.log(typeof students); //type of doesn't tel me my variable is an array -> object

// // console.log(students instance of Array); //instanceof tells me my array is an array

// // console.log(student[2]);
// //if you want a value of an array you use [] with the number of that array

// let name = student[6][1];
// // console.log(name); 
// //just get Iesha
// console.log(`Hello ${name}, you look nice today.`);

// //recall for-of loop --> gives the values of the array
// let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// for (f of food){
//     console.log(f+' is amazing!');
// }

// //array methods-methods are built in functions in javascript

// food.push("pizza");
// console.log(food);
// food.splice(1, 1,"bananas");
// console.log(food);
// food.splice(2, 0, "sweet potato pie");
// console.log(food);
// food.pop(); //removies the last element of an array. 
// console.log(food);
// //first number 1 (what position do i want to splice), second number 1 (how many items do I want to remove), 

// food = food.slice(2, 4); //the first number is the first element to slice from the array, while the second number is the stop position (not to be included)
// console.log(food); // sweet potato pie, quesadilla

// forEach allows us to iterate with loops specifically, and we can directly grab the elements and their index numbers. 

//arrow function
// food.forEach((f) => console.log(f));
//f (first) represents each every element one by one in the array 

// food.forEach((food, index) => {
//     console.log(food);
//     console.log(index);
// }

// food.forEach((food, index) => {
//     console.log(`The ${food} food in our array is at position ${index}`);
// }

let movies = ['300', 'Snow White' ,'The Phantom Menance', 'The Watchmen', 'The Sound of Music'];

movies.push('The force awakens');
console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentleman');
console.log(movies);

movies.forEach(movie => console.log(movie));

//lets do the following with an array. we will check if we are working with an array, flip the values within array (what was in index 4 is now in 0,3 to 1, etc.) using method only, lets pring the values of the newly arranged array. 

let arr = new Array(1, 2, 3, 4, 5);
let (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));

}