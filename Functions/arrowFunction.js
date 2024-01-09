//normal function 
function greeting(){
    console.log("Hello World!");
}
greeting();

//arrow function
const greet = ()=>{
    console.log("Hello Moto..");
}

greet();

//diffrent syntax to write arrow function
// ()=>{
//     statments
// }

// ()=>expression

const square = (num) => num*num;
let result = square(3);
console.log("Result: "+result);