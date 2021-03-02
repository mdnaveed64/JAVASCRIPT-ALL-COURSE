/*
    JavaScript Operators
    ---------------------
    -> Assignment Operators : =
    -> Arithmetic Operators : + - / * %
    -> Short hand Math Operators : += , -= , /= , *=
    -> Conditional Operators : < , > , <= , >= , !==
    -> Unary Operators : ++ , --
    -> Logical Operators : && , || , ^
    -> Ternary Operator : ?:
    -> Equality Operators : == , ===
 */

// Assignment Operators : =
let test = 10;
console.log(test);

// Arithmetic Operators : + - / * %
let num1 = 10;
let num2 = 20;
console.log(`sum : ${num1 + num2}`);
console.log(`sub : ${num1 - num2}`);
console.log(`mul : ${num1 * num2}`);
console.log(`div : ${num1 / num2}`);

// find the number is even or odd
let number = 11;
if(number % 2 === 0){
    console.log(`${number} is an Even Number`);
}
else{
    console.log(`${number} is an Odd Number`);
}

// Short hand Math Operators : += , -= , /= , *=
let a = 20;
let b = 30;
let add = 10;
add = add + (a + b); // 10 + 20 + 30 => 60
add += (a + b); // 60 + 20 + 30 = 110
console.log(add); // 110

// Conditional Operators : < , > , <= , >= , !==
let marks = 35;
if(marks <= 35){
    console.log('You Failed the Exam');
}
else{
    console.log('You Cleared the Exam');
}

// Unary Operators : ++ , --
let x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);

// Logical Operators : && , || , ^
/*
    AND => T && T -> T
    OR =>  F || F -> F
    XOR => T ^ F , F ^ T -> T
 */

let inRelation = true;
let parentsAgreed = true;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log(`Wait until the parents Agreed`);
}

// Ternary Operator ?:
/*
    syntax : (condition) ? true : false;
 */
marks = 25;
let message = '';
(marks <= 35) ? message = 'You Failed the Exam' : message = 'You Cleared the Exam';
console.log(message);

// Equality Operator : == , ===
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}


