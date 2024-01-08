function secondSmallest(arr) { 

    const sortedArr = arr.sort((a, b) => a - b); 
  
    return sortedArr[1]; 
  
  } 

const array = [1,4,2,5,2];
const result = secondSmallest(array);
console.log(result);