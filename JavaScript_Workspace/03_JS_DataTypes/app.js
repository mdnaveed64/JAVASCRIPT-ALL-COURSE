/*
    JS Data Types
    --------------
    The Type of data which we can assign to a variable

    1) Number -> any number
    2) String -> any text data
    3) Boolean -> true , false
    4) undefined
    5) null
 */

// string
let employeeName =  'John';
console.log(`Value : ${employeeName} Type : ${typeof employeeName}`);

// number
let employeeAge = 40;
console.log(`Value : ${employeeAge} Type : ${typeof employeeAge}`);

// boolean
let isManager = true;
console.log(`Value : ${isManager} Type : ${typeof isManager}`);

// undefined
let name; // variable declaration
console.log(`Value : ${name} Type : ${typeof name}`);

// null (dummy value)
let test = null;
console.log(`Value : ${test} Type : ${typeof test}`);

// Arrays , Objects (future classes)

// Re-Assignment is allowed
let abc;
abc = 10;
abc = 'test';
abc = true;
abc = null;
console.log(`Value : ${abc} Type : ${typeof abc}`);
