//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(testStr){
    const newStr = testStr.replace([/^a-zA-Z0-9/g, '']).toLowerCase();

    return newStr === newStr.split('').reverse().join('');
}
const testStr = "NaN NaN";
// console.log(isPalindrome(testStr));
if(isPalindrome){
    console.log("Palindrome String");
}else{
    console.log("Not palindrome");
}