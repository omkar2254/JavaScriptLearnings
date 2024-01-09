//Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.
function largestDifference(numbersArray) {
    if (numbersArray.length < 2) {
      return "Array should have at least two numbers.";
    }
  
    let maxDifference = numbersArray[1] - numbersArray[0];
  
    for (let i = 0; i < numbersArray.length; i++) {
      for (let j = i + 1; j < numbersArray.length; j++) {
        const currentDifference = numbersArray[j] - numbersArray[i];
        maxDifference = Math.max(maxDifference, currentDifference);
      }
    }
  
    return maxDifference;
  }
  
  
  const myNumbers = [7, 1, 5, 3, 6, 4];
  const result = largestDifference(myNumbers);
  
  console.log(`Largest Difference: ${result}`);
  