// Declaration and initialization

var a = "Omkar Patil" ;

// Declaration

var a;

// Initialization

a = "Omkar Patil";

// Issues with var :
// Var is not block-scoped.
// When you declare a variable within a code block, using curly braces ({}), its scope "flows out" of the block! For instance:

var a = "Omkar Patil";

var someBool = true;

if (someBool) {

var a = "Patil Omkar";

}
console.log(a); //it prints Patil Omkar


/*
The let Keyword in JavaScript
The let declaration was introduced with ES6 and has since become the preferred method for variable declaration. 
It is regarded as an improvement over var declarations 
and is block-scoped (variables that can be accessed only in the immediate block), circumventing the main issue that can arise with using var

Scope of let
A variable defined with the let keyword has a scope limited to the block or function in which it is defined:
*/


let firsta = "Omkar";//global scope

let lasta = "Patil";

let someBool = true;

if(someBool){

//block scope
let firsta = "Krishna";

console.log(firsta);

}

console.log(firsta); 
/* Result: 
    Krishna 
    Omkar  
*/

/*
The const Keyword in JavaScript:

The const declaration was introduced with ES6, 
alongside let, and it is very similar to let. 
const points to data in memory that holds constant values, 
as the name implies. const reference variables cannot be reassigned to a different object in memory:
*/


const a = "Omkar";
const a = "Krishna";
console.log(a);

//Result: Uncaught SyntaxError: Identifier 'a' has already been declared


const a = "John";
a = "Doe";

/* Uncaught TypeError: Assignment to constant variable.*/

/* Good Coding Conventions
So, what does this all mean, and which should you choose, other than the obvious requirements to avoid bugs? This can actually be boiled down to a couple of good practices:

const is preferred to let, which is preferred to var. Avoid using var.
let is preferred to const when it's known that the value it points to will change over time.
const is great for global, constant values.
Libraries are typically imported as const. */

/* Data types - Primitive 1.Numbers 2.Strings 3.Boolean 4.Null 5.Undefined
                Non primitive 1.Array 2.Object 3.Function 
*/

/* 1.Array : Homogeneous Data Structure
   An Array is a data structure that contains a list of elements of the same data type.
*/
var names = ["Omkar", "Prathmesh", "Shaileja"] ; // Array of strings

var ages = [ 30, 29, 33 ] ; // Array of numbers


/* 2.Objects : Key Value Pairs
   An Object is a standalone entity. It consists of properties & methods
*/
var student = {
    roll_no : 34,
    name : "Mayank" ,
    age : 27 ,
    city : Delhi
};

// 3.Functions :
// A function is a block of organized, reusable code that is used to perform a single, related actions.
function sum (a, b) {
    return a+b
}

sum (3,4) ; // 7
sum (5,6) ; //11


/* JavaScript Type Conversions :
In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.

There are two types of type conversion in JavaScript.

Implicit Conversion - automatic type conversion
Explicit Conversion - manual type conversion */

//Implicit Conversion


// numeric string used with + gives string type
let result;

result = '3' + 2; 
console.log(result) // "32"

result = '3' + true; 
console.log(result); // "3true"

result = '3' + undefined; 
console.log(result); // "3undefined"

result = '3' + null; 
console.log(result); // "3null"


// numeric string used with - , / , * results number type

let result_;

result_ = '4' - '2'; 

console.log(result_); // 2

result_ = '4' - 2;

console.log(result_); // 2

result_ = '4' * 2;

console.log(result_); // 8

result_ = '4' / 2;

console.log(result_); // 2



// non-numeric string used with - , / , * results to NaN

let result__;

result__ = 'hello' - 'world';

console.log(result__); // NaN

result__ = '4' - 'hello';

console.log(result__); // NaN




// if boolean is used, true is 1, false is 0

let _result;

_result = '4' - true;

console.log(_result); // 3

_result = 4 + true;

console.log(_result); // 5

_result = 4 + false;

console.log(_result); // 4




// null is 0 when used with number

let __result;

__result = 4 + null;

console.log(__result);  // 4

__result = 4 - null;

console.log(__result);  // 4


// Arithmetic operation of undefined with number, boolean or null gives NaN

let ans;

ans = 4 + undefined;

console.log(ans);  // NaN

ans = 4 - undefined;

console.log(ans);  // NaN

ans = true + undefined;

console.log(ans);  // NaN

ans = null + undefined;

console.log(ans);  // NaN


/* JavaScript Explicit Conversion
You can also convert one data type to another as per your needs. The type conversion that you do manually is known as explicit type conversion.

In JavaScript, explicit type conversions are done using built-in methods.

Here are some common methods of explicit conversions.*/

// 1.Convert to Number Explicitly
// To convert numeric strings and boolean values to numbers, you can use Number(). For example,

let b;

// string to number

b = Number('324');

console.log(b); // 324

b = Number('324e-1')

console.log(b); // 32.4

// boolean to number

b = Number(true);

console.log(b); // 1

b = Number(false);

console.log(b); // 0

//In JavaScript, empty strings and null values return 0. For example,

let c;

c = Number(null);

console.log(c);  // 0

let d = Number(' ')

console.log(d);  // 0

//If a string is an invalid number, the result will be NaN. For example,


let e;

e = Number('hello');

console.log(e); // NaN

e = Number(undefined);

console.log(e); // NaN

e = Number(NaN);

console.log(e); // NaN

//You can also generate numbers from strings using parseInt(), parseFloat(), unary operator + and Math.floor(). For example,

let num;

num = parseInt('20.01');

console.log(num); // 20

num = parseFloat('20.01');

console.log(num); // 20.01

num = +'20.01';

console.log(num); // 20.01

num = Math.floor('20.01');

console.log(num); // 20

// Convert to String Explicitly
// To convert other data types to strings, you can use either String() or toString(). For example,

//number to string

let str;

str = String(324);

console.log(str);  // "324"

str = String(2 + 4);

console.log(str); // "6"

//other data types to string

str = String(null);

console.log(str); // "null"

str = String(undefined);

console.log(str); // "undefined"

str = String(NaN);

console.log(str); // "NaN"

str = String(true);

console.log(str); // "true"

str = String(false);

console.log(str); // "false"

// using toString()

str = (324).toString();

console.log(str); // "324"

str = true.toString();

console.log(str); // "true"

/*  Convert to Boolean Explicitly
To convert other data types to a Boolean, you can use Boolean().

In JavaScript, undefined, null, 0, NaN, '' converts to false. For example, */



let bool;

bool = Boolean('');

console.log(bool); // false

bool = Boolean(0);

console.log(bool); // false

bool = Boolean(undefined);

console.log(bool); // false

bool = Boolean(null);

console.log(bool); // false

bool = Boolean(NaN);

console.log(bool); // false



result = Boolean(324);

console.log(result); // true

result = Boolean('hello');

console.log(result); // true

result = Boolean(' ');

console.log(result); // true
