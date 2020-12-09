// equality comparsion operator

console.log('3' == 3);
console.log(4==4);
console.log(3 == '4');

//strict equality comparsion operator
console.log(3 === 3);
console.log('3' === 3);

//not equal comparsion operator
console.log('3' != 4);
console.log('3' != 3);


//strict not equal comparsion operator
console.log('3' !== 3);

//greater than
console.log(3>2);
console.log(2>3);

//less than
console.log(2<3);
console.log(3<2);

//greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

//less than or equal to
console.log(2 <= 3);
console.log(3 <= 2);

//And (both expressions on either side of the operator must be true for "and" to return true)
console.log(1<2 && 3>0);//both expressions true
console.log(2<1 && 3>0); //one is false and one is true=false

//or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<0); //still true because 1 expression holds true 
console.log(2<1 || 3<0); //reads false 

let obj= {key: 'test'};
console.log(obj == {key:'test'}); //looks the same but two different objects. 

console.log(obj == obj);

let arr = [1, 2, 3, 4];
console.log(arr == [1,2,3,4]);
console.log(arr == arr); //are we talking about the exact same thing. 


