//basics of function
function showMessage () {
    console.log('in a function');
}
showMessage();
showMessage();
//the message is shown twice

//function expression
let myFunction = function(message){
    console.log(message);
}
myFunction("Hello");

//info in functions
function showMe(message, anotherMessage){
    console.log(message, anotherMessage);
}
showMe("first_me","second_me");

//return value using function
function getSecretCode(value){
    let code = value*2;
    return code;
}
console.log(getSecretCode(45));


