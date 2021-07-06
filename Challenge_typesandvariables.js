/** part 1
const myObject = {};
console.log(myObject);

myObject= {};*/

/** part 2
 * Declare x and assign 10
 * declare y and assign true
 * declare my object and assign object with 2 name value pairs
 * declare another object
 * later assign value to it , object with 3 name value pairs
*/

let x = 10;
const y = true;
const myObject = {
    a: x, 
    b: y
};
console.log(myObject);

x=20

let anotherObject = {
    newa: x, 
    b: y,
    c: myObject
};
console.log(anotherObject);

