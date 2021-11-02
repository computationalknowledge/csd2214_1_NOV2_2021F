console.log(add(2,2));
//  hoisting
console.log(" a is ", a);
function add(x,y){return x+y;}

a = 7

console.log('fini');


//  *******************************

var a = 7;
console.log(add(2,2));
//  hoisting
//  temporal dead zone
console.log(" a is ", a);
function add(x,y){return a+y;}

var a =  7 ;

console.log('fini');
