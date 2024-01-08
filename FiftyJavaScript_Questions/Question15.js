//Given a string, write a function to count the occurrences of each character in the string. 
function countCharacterOccurrences(str){
    //object to store character count
    const charCount = {};
    for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
const myString = "Hello World!";
const occurrences = countCharacterOccurrences(myString);
console.log(occurrences);