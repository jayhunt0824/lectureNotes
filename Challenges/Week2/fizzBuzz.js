/*
    Challenge:
    Bronze:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Silver: Convert this to SWITCH STATEMENT 
    
    Gold: Convert to a TERNARY
    Resources: https://www.w3schools.com/js/js_arithmetic.asp
               https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/b410fcc6-7a7b-45a0-81b9-354423866db9.gif
*/





// let fb = 15;


// if(fb%5 == 0 && fb%3 == 0){
// console.log('Fizz Buzz');
// }

// else if (fb%3 == 0){
//     console.log('Fizz');
// }

// else if (fb%5 == 0){
//     console.log('Buzz');
// }


// let isDivisibleBy5and3 = FB % 3 == 0 && FB % 5 ==0;
// let isDivisibleBy3 = FB % 3 == 0;
// let isDivisibleBy5 = FB % 5 ==0;

// console.log(isDivisibleBy5and3);

// switch(true){
//     case: isDivisibleby5and3:
//     console.log ('fizz buzz');
//     break;
//     case FB % 3 == 0:
//         console.log ('fizz');
//         break;
//         case FB % 5 == 0;
//         console.log ('buzz');
//         break;
//         default:
//             console.log('not fizz, not buzz');
// }



/*
FIZZBUZZ (functions, conditionals, and loops)
************
-Create a function with the following logic:
    - a for loop running between the numbers 0 - 100
    - for multiples of 3, instead of the number, console.log "Fizz"
    - for multiples of 5 console.log "Buzz";
    - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
    - for any other number, console.log the value
*/


function countToOneHundred(){
    for(let i = 0; i <= 100; i++) {
    if ((i % 3 == 0 && i % 5 == 0)){
        console.log("Fizz Buzz");
    }else if (i % 3 == 0){
        console.log("Fizz");
    }else if (i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
   
}
}
}

countToOneHundred();

// function countToOneHundred(){
//     for(let i = 0; i <= 100; i++) {
//         if (i % 15 == 0){
//             console.log("Fizz Buzz");
//         } else if (i % 3 == 0){
//             console.log("Fizz");
//         } else if (i % 5 == 0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// ​
// countToOneHundred();


















