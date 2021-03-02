/*
    print 0 - 10 diff 1
 */
let result = '';
let i = 0;
do{
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
while(i <= 10);
console.log(result);

/*
    Print from 20 - 0 diff 2
 */
result = '';
i = 20;
do{
    if(i > 0){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i -= 2;
}
while(i >= 0);
console.log(result);

/*
    *
    * *
    * * *
    * * * *
    * * * * *
 */
let number = 5;
result = '';
i = 1;
do{
    let j = 1;
    do{
        result += `* `;
        j++;
    }
    while (j <= i);
    result += `\n`;
    i++;
}
while(i<=number);
console.log(result);

/*
    1) 1
       12
       123
       1234
       12345

    2) 1
       22
       333
       4444
       55555

    3) 12345
       1234
       123
       12
       1

    4) 55555
       4444
       333
       22
       1
 */

/*
     1) 1
        12
        123
        1234
        12345
 */
result = '';
i = 1;
do{
    let j=1;
    do{
        result += `${j} `;
        j++;
    }
    while(j<=i);
    result += `\n`;
    i++;
}
while(i <= 5);
console.log(result);

/*
    2) 1
       22
       333
       4444
       55555
 */
result = '';
i = 1;
do{
    let j=1;
    do{
        result += `${i} `;
        j++;
    }
    while(j<=i);
    result += `\n`;
    i++;
}
while(i <= 5);
console.log(result);

/*
3)      12345
        1234
        123
        12
        1
 */
result = '';
i = 5;
do{
    let j = 1;
    do{
        result += `${j} `;
        j++;
    }
    while(j <= i);
    result += `\n`;
    i--;
}
while(i >= 1);
console.log(result);

/*
    4) 55555
       4444
       333
       22
       1
 */
result = '';
i = 5;
do{
    let j = 1;
    do{
        result += `${i} `;
        j++;
    }
    while(j <= i);
    result += `\n`;
    i--;
}
while(i >= 1);
console.log(result);



