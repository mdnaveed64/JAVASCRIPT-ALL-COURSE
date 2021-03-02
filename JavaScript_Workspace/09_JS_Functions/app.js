// print from 0 - 10 diff 1
function printNumbers(startNumber , endNumber, increment) {
    let result = '';
    for(let i=startNumber; i<=endNumber; i += increment){
        result += `${i} `;
    }
    console.log(result);
}
printNumbers(10,50 , 5); // function call / execution
printNumbers(100,500 , 10); // function call / execution

// Function without Parameters
function greet() {
    console.log('Good Morning');
}
greet();

// Function Expression
let greetMe = function() {
    console.log('Good Morning');
};
greetMe();

// function with parameters
let wishMe = function(name,age) {
    let message = `Hello ${name} You are ${age} yrs Old`;
    console.log(message);
};
wishMe('John',40);

// function with return Type
let sum = function(a , b) {
  let result = 2 * (a + b);
  return result;
};
let output = sum(10,20);
console.log(output);

// function with an object as parameter
let printObject = function(obj) {
   console.log(obj);
};
printObject({name : 'Rajan' , age : 20});

let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};
printObject(mobile);

// function with an array as a parameter
let printArray = function(array) {
    let result = '';
    for(let index in array){
        result += `INDEX : ${index} => VALUE : ${array[index]} \n`;
    }
    console.log(result);
};
printArray([10,20,30,40]);

let colors = ['white','black','orange','purple'];
printArray(colors);

// function inside an object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// Nested Function
let outerFn = function() {
  console.log('Iam an Outer Function');
  let innerFn = function() {
      console.log('Iam an Inner Function');
  };
  innerFn();
};
outerFn();

// Twisted Function
let twistedFn = function() {
  let name = 'John';
  let printStudent = function() {
      let student = {
          name : 'Rajan',
          age : 20,
          course : 'CSE'
      };
      return student;
  };
  return printStudent;
};
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj.name);

// Prepare chicken Curry with Functions
let glassBowl = function(rawChicken,masala) {
    // marinating the chicken
    let marinatedChicken = `MIXING : (${rawChicken} + ${masala})`;
    return marinatedChicken;
};

let cookingBowl = function(marinatedChicken , water) {
  // cooking Logic
  let cookedChicken = `COOKING : (${marinatedChicken} + ${water})`;
  return cookedChicken;
};

let eatingPlate = function(coockedChicken , rice) {
    // Eating Logic
    let eating = `EATING : (${coockedChicken} + ${rice})`;
    console.log(eating);
};

let rawChicken = '3Kg Chicken';
let masala = 'Garlic , Pepper , Salt';
let marinatedChicken = glassBowl(rawChicken , masala);
let water = '1Ltr water';
let cookedChicken = cookingBowl(marinatedChicken , water);
let rice = '1Kg Rice';
eatingPlate(cookedChicken , rice);
