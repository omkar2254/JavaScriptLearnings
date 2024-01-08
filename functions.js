//Defining the function
function sum(num1, num2){
    return num1 + num2;
}
sum(3,6);//9

//syntax
function functionName(){
    //function body
}

function greet(){
    console.log("Hello there!!");
}
greet();

function sayThanks(name='stranger'){
    console.log(`Thank you for your purchase, ${name} Visit again!!`);
}
sayThanks();
sayThanks('Omkar');



function calculateArea(height, width){
    return height * width;
}

let rectangleHeight = 10;
let rectangleWidth = 6;
console.log(calculateArea(rectangleHeight, rectangleWidth));