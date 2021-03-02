/*
Storage
--------
-> localStorage -> string -> JSON.stringify() , parse()
	-> setItem('key','value'); // create / update
	-> getItem('key'); // read
	-> removeItem('key'); // delete
	-> clear();

-> sessionStorage ->
		-> setItem('key','value'); // create / update
		-> getItem('key'); // read
		-> removeItem('key'); // delete
		-> clear();
 */

// Local Storage for simple String
let empName = 'John';

//set
localStorage.setItem('name',empName);

//get
console.log(localStorage.getItem('name'));

// delete the key
localStorage.removeItem('name');

// clear
localStorage.clear();

// local storage with an array
let colors = [{id : 1 , name : 'white'},
              {id : 2 , name : 'black'},
              {id : 3 , name : 'blue'},
              {id : 4 , name : 'yellow'}];

localStorage.setItem('colors',JSON.stringify(colors));

let theColors = JSON.parse(localStorage.getItem('colors'));
console.log(theColors);

localStorage.removeItem('colors');

// Session Storage with Simple String
let studentName = 'Rajan';

//set
sessionStorage.setItem('name',studentName);

//get
console.log(sessionStorage.getItem('name'));

// delete
sessionStorage.removeItem('name');
sessionStorage.clear();

// local storage with an array
colors = [{id : 1 , name : 'white'},
    {id : 2 , name : 'black'},
    {id : 3 , name : 'blue'},
    {id : 4 , name : 'yellow'}];

sessionStorage.setItem('colors',JSON.stringify(colors));

theColors = JSON.parse(sessionStorage.getItem('colors'));
console.log(theColors);

sessionStorage.removeItem('colors');
