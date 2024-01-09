const calculate = (a, b, operation) => {
    return operation(a, b);
}

//method 1
const add = calculate(1, 0, function(num1, num2){
    return num1 + num2;
})
console.log(add);

//method 2
const subtraction = (a, b) => a - b;
const subResult = calculate(8, 3, subtraction);
console.log(subResult);

//method 3
function multiply(a, b){
    return a * b;
}
const mlResult = calculate(3, 3, multiply);
console.log(mlResult);