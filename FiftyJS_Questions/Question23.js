//Implement a function that returns the average value of numbers in an array. 
function calAverageValue(numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum/numbers.length;
}

const numbers = [1,2,3,4,5,6];
const ans = calAverageValue(numbers);
console.log(ans);