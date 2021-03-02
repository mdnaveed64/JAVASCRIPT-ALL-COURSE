/*
    let -> keyword to declare a variable
    a -> variable name / reference variable
    = -> assignment operator
    10 -> value / data
    ; -> end of the statement
 */


let a = 10;
let b = 20;
let sum = a + b;
console.log('The Sum of ' + a + ' , ' + b + ' is : ' + sum); // ES5

// ES6 -> Template String / template Literal (``) back tick
console.log(`The Sum of ${a} , ${b} is : ${sum}`); // ES6

// Rules in Declaring variables
/*
    Rules for Variable Declarations
-------------------------------
1) All variables are case sensitive

  Ex: let name = 'Naveen';
      console.log(Name); // Error

2) All Variable name must be in camelCase

	Ex: let myEmployeeName = 'John';

3) max allowed chars 15

4) chars allowed are a-z , A-Z , $ , _ , 0-9

	Ex: let number = 10; // valid
	    let $number = 20; // valid
		let _number = 30; // valid
		let number_1 = 40; // valid
		let 1number = 50; // not valid
	// variable must not starts with a number
	   let #name = 'John'; // not Valid

5) a variable must not re-declared

  Ex: let name = 'Naveen';
      let name = 'John'
		console.log(name);
 */

