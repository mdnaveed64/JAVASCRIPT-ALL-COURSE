// Number Object

// max Number
console.log(Number.MAX_SAFE_INTEGER);

// min Number
console.log(Number.MIN_SAFE_INTEGER);

// Pos Infinity
console.log(Number.POSITIVE_INFINITY);

// Neg Infinity
console.log(Number.NEGATIVE_INFINITY);

// Parse Int
let str1 = '100.145';
let num1 = Number.parseInt(str1);
console.log(`${typeof str1} => ${typeof num1}`);

// Parse Float
let str2 = '100.145';
let num2 = Number.parseFloat(str2);
console.log(`${typeof str2} => ${typeof num2}`);

// toString
let num3 = 100;
let numString = num3.toString();
console.log(`${typeof num3} => ${typeof numString}`);

// toFixed
let amount = 520;
console.log(amount.toFixed(2));

// String Related Operations
let msg = String('Good Morning');

// length
console.log(msg.length);

// lowercase
console.log(msg.toLowerCase());

// uppercase
console.log(msg.toUpperCase());

// substr(start index,no of chars)
console.log(msg.substr(0,4)); // Good

// substr
console.log(msg.substr(5)); // Morning

// charAt
console.log(msg.charAt(5)); // M

// charCodeAt (ASSCII)
console.log(msg.charCodeAt(5)); // 77

// JSON Object
/*
    String => Object : parse()
    Object => String : stringify()
 */

let student = {
    name : 'Rajan',
    age : 20,
    course : 'CSE',
    college : 'IIT Mumbai'
};
console.log(student);

// Object to String
let studentStr = JSON.stringify(student);
console.log(studentStr);

// String to Object
let newStudent = JSON.parse(studentStr);
console.log(newStudent);
