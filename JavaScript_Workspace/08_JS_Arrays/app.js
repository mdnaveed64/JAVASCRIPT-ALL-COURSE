// Creation of an array
let numbers = [10, 20, 30];
console.log(numbers);

// access the elements of an array
console.log(numbers[1]); // 20

// access the non-existing
console.log(numbers[3]); // undefined

// Iteration of array elements
let colors = ['white','black','silver','purple','blue','yellow'];

// 1. normal for-loop
let result = '';
for(let i=0; i <= colors.length-1; i++){
    result += `${colors[i]} `;
}
console.log(result);

// 2. for-in loop upto ES5
result = '';
for(let index in colors){
    result += `${colors[index]} `;
}
console.log(result);

// 3. for-of loop from ES6
result = '';
for(let color of colors){
    result += `${color} `;
}
console.log(result);

// 4. forEach function upto ES5
result = '';
colors.forEach(function(color) {
    result += `${color} `;
});
console.log(result);

// 5. forEach with Arrow function from ES6
result = '';
colors.forEach(color => result += `${color} `);
console.log(result);

// Array of Objects
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

// access all employees
console.log(employees);

// iterate employees
result = '';
for(let employee of employees){
   result += `${employee.name} `;
}
console.log(result);

// Filter the junior employees : age <= 30
console.log(employees);
let juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// filter active employees : isActive : true
let activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);

// Functions of Arrays
// shift() -> remove the first element from array
console.log('------------------- shift() --------------- ');
let technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

// unshift() -> add the first element to array
console.log('------------------- unshift() --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.unshift('node js');
console.log(technologies);

// push() -> add the last element to array
console.log('------------------- push() --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.push('node js');
console.log(technologies);

// pop() -> remove the last element from array
console.log('------------------- pop() --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// sort() -> to sort the array in ascending order
console.log('------------------- sort() --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

// reverse() -> to reverse the array elements
console.log('------------------- reverse() --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// reverse order of elements
console.log('------------------- reverse Order --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

// splice(index) -> it removes all the elements from the given index
console.log('------------------- splice(index) --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

// splice(index,no-of elements) -> it removes the given no of elements from the given index
console.log('------------------- splice(index) --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,1);
console.log(technologies);

// splice(index,1,replace Element) -> it replaces the given element at the given index
console.log('------------------- splice(index) --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
technologies.splice(4,1,'React JS');
console.log(technologies);

// join() -> to join the array elements to string
console.log('------------------- join() --------------- ');
technologies = ['html','css','javascript','jquery','bootstrap'];
console.log(technologies);
let techString = technologies.join(' - ');
console.log(techString);

// split() -> to split a string to an array
console.log('------------------- split() --------------- ');
console.log(techString);
let newTechs = techString.split(' - ');
console.log(newTechs);

// Filter the junior employees : age <= 30
console.log('------------------- filter() --------------- ');
juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

let jrEmployees = employees.filter(function(employee) {
    return employee.age <= 30;
});
console.log(jrEmployees);

// filter active employees : isActive : true
console.log('------------------- filter() --------------- ');
activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);

let actEmployees = employees.filter(function(employee) {
    return employee.isActive;
});
console.log(actEmployees);
