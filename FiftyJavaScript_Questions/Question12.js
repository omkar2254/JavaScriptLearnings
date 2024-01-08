//Given an array of numbers, write a function to find the largest and smallest numbers in the array.
function findLargest(arr){
    let big = arr[1];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > big){
            big = arr[i];
        }
    }
    return big;
} 

function findSmallest(arr){
    let small = arr[1];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < small){
            small = arr[i];
        }
    }
    return small;
}
const array = [1,2,3,4,5,6];

const small = findSmallest(array);
console.log("Smallest: " + small);

const large = findLargest(array);
console.log("Largest: " + large);