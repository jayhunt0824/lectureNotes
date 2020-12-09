// *** relational operators**
/* Greater Than:>
Less than: <
Less than or equal to <==
greater than or equal to >=

// *** logical operators**

Ands: &&
Ors: ||

equal: ==
not eual: !=

*Strict*
Equal: ===
Not Equal: !===

/* 
CHALLENGE 1
Who's name is longer?
BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!


EFA - Rob Vanarsdall  6:33 PM
Conditional Notes 
// ******* Relational Operators ******
// Greater Than: >
//  Less Than: <
//  Less Than or Equal <=
// Great Than or Equal >=
// ******* Logical Operators ******
//  AND: &&
//  OR: ||
// ******* Logical Operators ******
// Equal: ==
// Not Equal: !=
// *** Strict ****
//  Equal: ===
//  Not Equal: !==
let age = 15;
if (age >= 21) {
  console.log("Yes can purchase");
} else {
  console.log("Can not purchase");

 */

*/





const myName = "Jen";
const friendName = "Dustie"
let sentence; 


console.log(myName.length);
console.log(friendName.length);



if (myName.length>friendName.length){
    sentence ="My name is longer than "+ friendName
    console.log(sentence);

} else{
    sentence ="Friends name is longer than mine by "+ myName;
    console.log(sentence);
    
}


/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
​
​ */
// const myName = "Rob";
// const friendName = "Josh";
// console.log(myName.length);
// console.log(friendName.length);
/* SILVER
​
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
​ */
// const myName = "Rob";
// const friendName = "Josh";
// let sentence;
// if (myName.length > friendName.length) {
//   sentence = "My name is longer than " + friendName;
//   console.log(sentence);
// } else {
//   sentence = `${friendName}'s name is longer than ${myName}`;
//   console.log(sentence);
// }
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional! */

const myName = "Robs";
const friendName = "Josh";
let sentence;
if (myName.length > friendName.length) {
  sentence = "My name is longer than " + friendName;
  console.log(sentence);
} else if (myName.length == friendName.length) {
  const differenceInLetters = friendName.length - myName.length;
  sentence = `${friendName}'s name is equal to ${myName}.  ${differenceInLetters} letters are different`;
  console.log(sentence);
} else {
  // const differenceInLetters = myName.length - friendName.length;
  const differenceInLetters = friendName.length - myName.length;
  sentence = `${friendName}'s name is longer than ${myName} by ${differenceInLetters} letters`;
  console.log(sentence);
