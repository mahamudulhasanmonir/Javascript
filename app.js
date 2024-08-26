

//document.getElementById('title').innerHTML = 'Hello World';
//function calling / Function Working Methods.
/*
let sum = 50+40;
console.log(sum);

if (sum>100){
    console.log('Expensive');
}else {
    console.log('Cheap');
}

function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello('Hasan')

function weather(degree){
    console.log(`Todays weather is ${degree}`);
}
weather("50' celcius");

*/

//Variables{ Here firstname is a variable/variable name and = is assaignment operator, Also 'Hasan' is  Full line is a statement}
//Here Hasan and 30 these are fixed value.
/*
let firstName = 'Hasan';
let age = 30;

firstName = 'Mahamudul';
console.log(objec)
*/

//Here is some Variables examples which i am using:

let fruits = 'grape';
console.log(`${fruits} is my favorite, I would like to eat`);

/*
Types of Variable & Types of working:
*var variable
*You can redeclare variable
*You can re assaign
*Global Scooped
*var is hosted
*/

var a = 10;

 var country = 'Bangladesh';
{
    console.log(a);
}
 console.log(country);


/*
Types of Variable & Types of working:
* let variable
! You can not re declare variable
* You can re assaign.
? Block Scooped.
! let is not hosted.
*/
  let b = 15;
  a = 11;
{
console.log(a);
}

// console.log(people);
// let people = 'SomeOne';
let firstName = 'Mahamudul';

/*
Types of Variable & Types of working:
* const variable
! You can not re declare variable
! You can not re assaign.
? Block Scooped.
! const is not hosted.
*/
const c = 10;   //const is variable type known as dhrubok, c is identifier, = is operator, 10 is data.
{
    const d = 50;
    console.log(c);
    console.log(d);
}
const person = {
    firstName: 'Mahamudul',
    age: 30,
};
person.country = 'Bangladesh';
person.age = 32;
person.gender = 'Male';

console.log(person);



















