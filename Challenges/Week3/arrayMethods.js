/*
Arrays

Are used to store multiple values in a single variable. 
-there are array methods that allow us to traverse, as well as mutate, the data being held by an array.

-Arrays are 0 indexed, meaning the first item in an array will have an index of 0, and the last item will have an index of the arrays length -1.



*/

// let arr = ["This is the first element", "This is the second element", "This is the third element"];

// console.log(arr[arr.length -1]); //gives us the last or third element in the array


// //This is the Array class construtor
// let test = new Array(); //array class constructor. Creates an array object. will initialize with any values you put in but if there is 1 number it will create that initial ray with that many empty items. 
// console.log(test);
// test[0]="did it work?"
// console.log(test);


// //for each method- executes the supplied function (in each paranthesis) for each element int he array
    //-for each method cannot return anything

// let boardGames = ["Monopoly", "Clue", "Risk", "Candy Land", "Catan"];

// // for(let i=0; i<=boardGames.length; i++){
// //     console.log(boardGames[i]);
// }

// boardGames.forEach(game => { //blockbody requres return keyword
//     console.log(game);
// })//game is our placeholder

// //concise body
// boardGames.forEach(game =. console.log(game));

// //annonymous function
// boardGames.forEach(function(game){
// console.log(game);
// })

//Array Methods

let shoppingList=["celery", "limes", "lemons", "grenadine", "oranges"];

//To access a specific element in an array, use bracket notation along with its index value.

console.log(shoppingList[0]);

//Array.length - returns the number of elements in the array
console.log(shoppingList.length);

//Array.push() - adds element to the end of the array
shoppingList.push("salt");
console.log(shoppingList);

//Array.unshift() - adds a new element at the beginning of the array
shoppingList.unshift("salt");
console.log(shoppingList);

//Array.pop() - removes the last element in the array and returns that element
let removedElement = shoppingList.pop(); //could store as a variable
console.log(shoppingList);

//Array.shift() - removes the first element in the array and returns that element
shoppingList.shift();
console.log(shoppingList); 

//array.map() -transforms the element in the original array by calling the given function once for each element inthe array

console.log(shoppingList.map(item => item.toUpperCase()));
let newShoppingList = shoppingList.map(item => item.toUpperCase()));

//array.filter() - creates a new array with only the elements that pass the test in a given function 
let newShoppingList = shoppingList.filter(item => item.startsWith("l"));
console.log(newShoppingList);

//array.find() - returns the first element in the array that passes a test given as a function
let shoppingItem = shoppingList.find(items => item.startsWith ("l"));
console.log(shoppingItem);

//array.includes() - determines whether an array has a specific element
let isIncluded = shoppingList.includes("limes");
console.log(isIncluded);

//array.indexof() - search the array for a specific element and returns its first index
// Returns -1 when element is not found
console.log(shoppingList.indexOf("lemons")); 
console.log(shoppingList.indexOf("salt")); //-1 bc no element was found

//array.findIndex() - returns the index of the first element in the array that passes the test in a given function. Returns -1 if the element is not found
let foundIndex = shoppingList.findIndex(item => item.startsWith("g"));
console.log(foundIndex);

//array.every() - check if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements. (checking for uniformity) checking for the letter lenght of each element. 

console.log(shoppingList.every(item => item.length > 1));

//array.concat() - merge two or more arrays and returns the new array
let anotherShoppingList = ["salt", "mint leaves", "olives"];
let combinedArrays = shoppingList.concat(anotherShoppingList);
console.log(combineArrays);

//array.slice() - selects a part of the array and returns a new array. Selects the elements starting at the provided start argument and ends at, but does not include the provided end argument. Slice does not include the element of the last spot. 
let newArray = shoppingList.slice(1, 3);
console.log(newArray);


//array.splice() - adds/removes elements in the array and returns the removed elements. First argument takes in an integer that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. Optional third argument that takes in the new element to be added to the array. 
shoppingList.splice(2, 2, "salt", "mint leaves"); //starts at 2nd index and removes 1 parameter, third number is what you want to add. Salt replaces the removed element.
console.log(shoppingList);

//array.sort() - sorts the items in an array. The sort order can either be alphabetic or numeric, and either ascending or descending. By default, the sort() orders the values as strings in alphabetical or ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending. 
console.log(shoppingList)
console.log(shoppingList.sort())

let costs = [3, 2, 13, 4];
//want to sort be descending order
console.log(costs.sort((a, b) => b - a));
//want to sort be ascending order
console.log(costs.sort((a, b) => a - b));

//array.reverse() = reverses the order of the elements in the array
console.log(shoppingList.reverse());

//array.toString() - converts the array into a string
console.log(shoppingList.toString());

//array.join() - converts the elements in the array into a string. Can accept an optional parameter, "seperator", which indicates how the element will be seperated. Default seperator is a comma. 
console.log(shoppingList.join("! and "));

//array.an ES6 feature: the spread operator. The spread operator, indicated by these 3 dotes "..." expands the contents of the array and takes it out of the array structure. 
console.log(...shoppingList);

let numArray = [20, 40, 60];
function sum(numOne, numTwo, numThree){
    return numOne + numTwo + numThree;
}
console.log(sum(...numArray));


