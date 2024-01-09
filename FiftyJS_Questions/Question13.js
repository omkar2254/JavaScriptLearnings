// Write a function that takes an array of integers as input and returns a new array with only the unique elements. 
function findUniqueElements(inputArray) {
    return Array.from(new Set(inputArray));
  }
  
  
  const inputArray = [1, 2, 3, 2, 4, 5, 1, 6];
  const uniqueElementsArray = findUniqueElements(inputArray);
  
  console.log("Original Array:", inputArray);
  console.log("Unique Elements Array:", uniqueElementsArray);
  