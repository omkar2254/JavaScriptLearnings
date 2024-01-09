//Implement a function to find the sum of all the numbers in an array.
function sumOfElements(arr){
    // let sum = 0;
    // for(let i=0;i<=arr.length;i++){
    //     sum = sum + i;
    // }
    // return sum;

    //--Or
    return arr.reduce((sum, num)=> sum + num, 0);
}
const array = [1,2,3,4,5];
let sum = sumOfElements(array);
console.log(sum);