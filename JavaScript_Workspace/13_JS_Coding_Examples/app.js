// 1. find the number of 'o' in the given string
let msg = 'Good Morning';
let findZeros = (str) => {
    let count = 0;
    for(let i=0; i<= str.length-1; i++){
        let char = str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`The Zeros in Strings is : ${findZeros(msg)}`);

// 2. find the reverse String of the given string
msg = 'Good Morning'; // gninroM dooG
let reverseString = (str) => {
    let tempString = '';
    for(let i=str.length-1; i >= 0; i--){
        let char = str.charAt(i);
        tempString += char;
    }
    return tempString;
};
console.log(`${msg} => ${reverseString(msg)}`);

// 3. check the given string is palindrome or not
msg = 'ABA';
let isPalindrome = (str) => {
    return (str === reverseString(str));
};
console.log(`${msg} is Palindrome ? ${isPalindrome(msg)}`);

// 4. Triangle String One
msg = 'NAVEEN SAGGAM';
let triangleOne = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(msg));

// 4. Triangle String Two
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

msg = 'NAVEEN SAGGAM';
let triangleTwo = (str) => {
    let tempStr = '';
    for(let i=0; i<=str.length - 1; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleTwo(msg));

// 5. Triangle String Three
msg = 'NAVEEN SAGGAM';
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i >= 1; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleThree(msg));

// 6. Triangle String Four
msg = 'NAVEEN SAGGAM';
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length - 1 ; i >= 0 ; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(msg));
