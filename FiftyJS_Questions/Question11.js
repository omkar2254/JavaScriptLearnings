//Implement a function to reverse a string without using the built-in reverse() method. 
function reverseString(inputString) {
    let reversedString = '';
    
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
  
    return reversedString;
  }
  
  // Example usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  
  console.log(`Original String: ${originalString}`);
  console.log(`Reversed String: ${reversedString}`);
  