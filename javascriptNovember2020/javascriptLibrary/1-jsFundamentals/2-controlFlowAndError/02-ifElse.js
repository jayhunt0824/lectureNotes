//IF ELSE

let weather = 75;

if (weather < 70){
    console.log('wear a jacket!');
} else {
    console.log('No jacket necessary!');

}

//you can blend compex conditionals and if-else statements based upon your needs:
if (weather > 70 && typeof weather === 'number'){
    console.log('This weather is amazing!');

} else{
    console.log('Either the temperature is cool, the variables is not a string, or both');
}

//ELSE IF

//if-elseif statements can be chained

let age = 11;
if (age >= 25){
    console.log('yay! you can rent a car!')

} else if (age >= 21){
    console.log('yay! You can Drink!');
}else if (age>= 18){
    console.log('yay! You can vote!')
}else {
    console.log('sorry, you are too young to do anything fun');
}