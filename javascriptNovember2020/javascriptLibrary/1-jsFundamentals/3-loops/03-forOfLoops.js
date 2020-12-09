//of requires that your 'thing' you're looping through be iterable--that means it needs to be numbered. 

//in does not require that the 'thing' you loop be numbered 
// let student= {name: 'peter', isAwesome: true, degree: 'javascript', week 1};

// for(item of student){

//     console.group(item);
// }

let catArray = ('tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll');

for(cat of catArray){
    console.log(cat, 'says meow');

}