//Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1. 
function findElementIndex(array, element) {
    return array.indexOf(element);
  }
  
  
  const myArray = [1, 2, 3, 4, 5];
  const elementToFind = 3;
  
  const index = findElementIndex(myArray, elementToFind);
  
  if (index !== -1) {
    console.log(`Element ${elementToFind} found at index ${index}`);
  } else {
    console.log(`Element ${elementToFind} not found in the array`);
  }
  