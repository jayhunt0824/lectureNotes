function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

//Call it
subtractTwoNumbers(5, 7);

function add(x, y){
    let sum = x + y;
    return sum; // or return x + y;
}
console.log(add(1,1)); 

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; // Or return first + " " + last;
}
console.log(fullName("Paul", "O'Connor"));

function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));
