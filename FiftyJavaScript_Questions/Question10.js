//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
function toTitleCase(str){
    return str.replace(/\b\w/g, match=>match.toUpperCase());
}
const inputString = "Hello I am moto";
const titleString = toTitleCase(inputString);

console.log("Original String: " + inputString);
console.log("titleString: "+titleString);