// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const arr = [1,2,3,4,5,6,7,8];

function evenNum(arr){
    return arr.filter(num => num%2 === 0);
}

const numbers = evenNum(arr);
console.log(numbers);