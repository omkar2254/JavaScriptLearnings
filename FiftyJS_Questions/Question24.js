//Write a function that sorts an array of strings in alphabetical order. 
function sortAlphabetically(stringsArray) {
    return stringsArray.slice().sort();
  }
  

  const unsortedArray = ["apple", "banana", "orange", "grape", "kiwi"];
  const sortedArray = sortAlphabetically(unsortedArray);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array (Alphabetical):", sortedArray);
  