//Write a function that sorts an array of numbers in ascending order. 
function ascendingOrder(arr){
    // for(let i=0;i<=arr.length;i++){
    //     for(let j=i+1;j<=arr.length;j++){
    //         let temp;
    //         if(arr[i] > arr[j]){
    //             temp = arr[i];
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    // }
    // return arr;

    //-or
    return arr.slice().sort((a, b)=>a-b);
}
const array = [1,4,2,5,7];
const newArr = ascendingOrder(array);
console.log(newArr);