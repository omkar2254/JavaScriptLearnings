//Write a JavaScript program to find the maximum number in an array. 

const Array = [1,43,5,32,33,2];

function findMaxArray(Array){
    return Math.max(...Array);
}

const maxNum = findMaxArray(Array);
console.log(maxNum);