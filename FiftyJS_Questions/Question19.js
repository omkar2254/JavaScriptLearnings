//Implement a function that removes duplicates from an array, keeping only the unique elements.
function removeDuplicates(inputArray) {
    return inputArray.filter((item, index)=>inputArray.indexOf(item)===index);
  }
  
  
  const myArray = [1, 2, 3, 2, 4, 5, 1, 6];
  const uniqueArray = removeDuplicates(myArray);
  
  console.log("Original Array:", myArray);
  console.log("Array without Duplicates:", uniqueArray);
  