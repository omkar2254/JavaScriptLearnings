/* JavaScript string contains a sequence of UTF-16 units
JavaScript string is a primitive data type that is used to work with texts. 
For example, */
const name = 'John';


//strings example
const name2 = 'Peter';
const name3 = "Jack";
const result = `The names are ${name2} and ${name3}`;

// You can access the characters in a string in two ways.
// One way is to treat strings as an array. For example,
const b = 'hello';
console.log(a[1]); // "e"

//Another way is to use the method charAt(). For example,
const c = 'hello';
console.log(a.charAt(1)); // "e"

//In JavaScript, strings are immutable. 
//That means the characters of a string cannot be changed. For example
let a = 'hello';
a[0] = 'H';
console.log(a); // "hello"

//However, you can assign the variable name to a new string. For example,
let a = 'hello';
a = 'Hello';
console.log(a); // "Hello"

/* JavaScript is Case-Sensitive
JavaScript is case-sensitive. That means in JavaScript, the lowercase and uppercase letters are treated as different values.
For example, */
const y = 'a';
const z = 'A'
console.log(a === b); // false

/* JavaScript Multiline Strings
To use a multiline string, you can either use the +operator or the \operator. 
For example, */
// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' +
    'in the code.'

// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'

//JavaScript String Length
const k = 'hello';
console.log(k.length); // 5

//You can also create strings using the new keyword. For example,
const o = "hello";

const p = new String('hello')//string object

console.log(o);//hello
console.log(p);//hello

console.log(typeof o);//"string"
console.log(p);//"object"

//JavaScript string methods
const text1 = 'hello';
const text2 = 'world';
const text3 = '   JavaScript   ';

//concatenating two strings
const result1 = text1.concat('',text2);
console.log(result1);//hello world

//converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2);//HELLO

//removing whitespace from the string 
const result3 = text3.trim();
console.log(result3);//JavaScript

//converting string to an array
const result4 = text1.split();
console.log(result4);//[hello]

//slicing the string
const result5 = text1.slice(1,3);
console.log(result5);//"el"

//String() function:
const j = 225; //number
const i = true;//boolean
const str1 = String(j);
const str2 = String(i);
console.log(str1);//"225"
console.log(str2);//"true"

//escape character
const esc = 'My name is \'Omkar\'.';
console.log(esc); 
//Output - My name is 'Omkar'

//concatenation operator
console.log('hello'+'world');
let con = 'JavaScript';
con+='tutorial';
console.log(con);//JavaScript tutorial

let girl = "Andrea";
let message = `Hello ${girl}`;

console.log(message);

//manipulating string
let msg = 'Hello';
msg = msg + ' world';
console.log(msg);

let msg1 = 'Hello'
msg1 = msg1.toLowerCase();
console.log(msg1);

let msg2 = 'Hello'
msg2 = msg2.substring(1)
console.log(msg2)

//Number to String
let amount = 123;
amount = amount.toString();
console.log(amount);
console.log(typeof amount);

//String to number
let num = Number.parseFloat("123.12");
console.log(typeof num);

let num2 = Number.parseInt("A369");
console.log(typeof num2);
//it prints NAN i.e Non numrical value

let saved;
console.log(saved);
//it prints undefined

let save;
save = null;
console.log(save);
//it prints null






