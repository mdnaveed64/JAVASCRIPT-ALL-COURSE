// JS BLOCK Scopes
let a = 10;
{
    let a = 20;
    {
        let a = 30;
        {
           let a = 40;
           console.log(a);
        }

    }
}

// block Scope
let course = 'Engineering';
if(course === 'Engineering'){
    let dept = 'Software';
}
console.log(course);
// console.log(dept);

// function
let greet = function() {
  let msg = 'Good Morning';
};
greet();
// console.log(msg);

