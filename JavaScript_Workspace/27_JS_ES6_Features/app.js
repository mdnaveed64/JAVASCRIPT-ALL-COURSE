/*
/!*
// 1) Template Strings (`) back tick operator +
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};

let msg = "BRAND : " + mobile.brand + " COLOR : " + mobile.color + " PRICE : " + mobile.price;
console.log(msg);

let msg1 = `BRAND : ${mobile.brand} COLOR : ${mobile.color} PRICE : ${mobile.price}`;
console.log(msg1);

let template1 = "<ul>" +
                    "<li>" + mobile.brand +"</li>" +
                    "<li>" + mobile.color +"</li>" +
                    "<li>" + mobile.price +"</li>" +
                "</ul>";

let template2 = `<ul>
                    <li>${mobile.brand}</li>
                    <li>${mobile.color}</li>
                    <li>${mobile.price}</li>
                 </ul>`;

// 2) Optional Parameters
let greet = function(name , age=35) {
    let msg = `Hello ${name} You are ${age} yrs Old`;
    console.log(msg);
};
greet('John',45);

let printNumbers = function(start , end=10) {
    let result = '';
    for(let  i = start; i<=end; i++){
        result += `${i} `;
    }
    console.log(result);
};
printNumbers(1);


/!*
    Function Types
    1) Normal Function
    2) Function Expression
    3) Arrow Function
 *!/
let result = '';
function printNumberNF() {
    let msg = '';
    for(let i=0; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
}
result = printNumberNF();
console.log(result);

// Function Expression
let printNumberFE = function() {
    let msg = '';
    for(let i=0; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
};
result = printNumberFE();
console.log(result);

// Arrow Function
let printNumbersAF = () => {
    let msg = '';
    for(let i=0; i<=10; i++){
        msg += `${i} `;
    }
    return msg;
};
result = printNumbersAF();
console.log(result);

// Usage of Arrow Function
let employees = [
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        name : 'Wilson',
        age : 46,
        designation : 'Sr.Manager',
        isActive : false
    },
    {
        id : 3,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        id : 4,
        name : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        isActive : false
    },
    {
        id : 5,
        name : 'David',
        age : 26,
        designation : 'Software Engineer',
        isActive : true
    }
];

// Junior employees
let juniorEmployees = employees.filter(function(employee) {
    return employee.age <= 30;
});
console.log(juniorEmployees);

// Junior employees with Arrow Function
let jrEmployees = employees.filter(employee => employee.age <= 30);
console.log(jrEmployees);

// Limitation of Arrow Function
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : () => {
        return `${student.firstName} ${student.lastName}`;
    }
};
console.log(student.fullName());


// For-Of Loops
employees = [
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager',
        isActive : true
    },
    {
        id : 2,
        name : 'Wilson',
        age : 46,
        designation : 'Sr.Manager',
        isActive : false
    },
    {
        id : 3,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        isActive : true
    },
    {
        id : 4,
        name : 'Laura',
        age : 28,
        designation : 'Tech Lead',
        isActive : false
    },
    {
        id : 5,
        name : 'David',
        age : 26,
        designation : 'Software Engineer',
        isActive : true
    }
];

// Normal - for loop
result = '';
for(let i=0; i<=employees.length-1 ; i++){
    let employee = employees[i];
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);


// for-in loop upto Es5
result = '';
for(let index in employees){
    let employee = employees[index];
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// for-of Loop of ES6
result = '';
for(let employee of employees){
    result += `${employee.name.toUpperCase()} `;
}
console.log(result);

// forEach Function Es5
result = '';
employees.forEach(function(employee) {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);

// forEach with Arrow Function ES6
result = '';
employees.forEach(employee => {
    result += `${employee.name.toUpperCase()} `;
});
console.log(result);
*!/

// De-structuring ES6
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    address : {
        street : 'Hitech City',
        city : 'Hyderabad',
        state : 'TS'
    },
    hobbies : {
        regular : {
            id : 1,
            regHobbies : ['Reading Books' , 'Playing Cricket']
        },
        occasional : {
            id : 1,
            occHobbies : ['Playing Cards' , 'Online Games']
        }
    }
};

// Destructuring
let {street , city , state} = student.address;
console.log(`STREET : ${street}
             CITY : ${city}
             STATE : ${state}`);

// regular Hobbies
let { regHobbies } = student.hobbies.regular;
console.log(regHobbies);
*/

// Spread Operator
let numbers = [10,58,98,754,1,851,91,161,6489];
let min = Math.min(...numbers);
console.log(min);

let array1 = ['white','black','blue','purple'];
let array2 = ['yellow','silver','orange'];
let colors = [...array1, ...array2];
console.log(colors);

