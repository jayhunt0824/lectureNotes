// Literals

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

console.log(weekDays.toString()); //to string is a method and turns content into single string
console.log(weekDays[3]);

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley',
}
console.log(soup.c);

//array and object literals can hold primitive and 'complex' types (arrays, object, functions)
let complesArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
// ........................Number, boolean, string, array, object, function 
console.log(complesArrLiteral[5]);
console.log(complesArrLiteral[3]);

let complexObjLiteral = {num:1, boolean: true, string: 'academy', arr: [1,2,3],
obj: {key: 'test'}, func: function(){return 'yes'}};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);


