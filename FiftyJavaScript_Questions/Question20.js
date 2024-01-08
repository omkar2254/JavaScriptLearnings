//Write a function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1). 
function findFactorial(num){
    if(num===0 || num===1){
        return 1;
    }
    else{
        return num * findFactorial(num -1);
    }
}
const inputNum = 5;
const factorial = findFactorial(inputNum);
console.log(`Factorial of ${inputNum} is: ${factorial}`);