// function task(message){
//     console.log(message);
// }
// console.log("Start script");
// setTimeout(()=>{
//     task("Download a file");
// }, 1000)
// console.log("Done");

//reverse a string
// var string = "Hello";

// var reverseEntireString = reverseBySeperator(string,"");
// console.log(reverseEntireString);

// function reverseBySeperator(string, seperator){
//     return string.split(seperator).reverse().join(seperator);
// }

//replace a string
// var a = "Almabetter";
// function reverseString(str, seperator){
//     return a.replace("a","m").toUpperCase();
// }

// console.log(reverseString(a,""))

// const arrayOfNumbers = [1, 2, 3, 4];
// arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);
// console.log(arrayOfNumbers);

// const girl = {
//     name: 'sophia',
//     age: 30,
//     //using function as value
//     greet: function(){console.log('hello')}
// }
// girl.greet();//hello

// const letters = new Set(['a','b','c']);
// letters.add("T")
// console.log(letters.size);

// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
// let text = "";
// letters.forEach (function(value) {
//   text += value;
// })
// console.log(text);

// Create an Iterator
// const myIterator = letters.values();

// // List all Values
// let text = "";
// for (const entry of myIterator) {
//   text += entry;
// }
// console.log(text);

const jsonData = {"name":"John","age":22};

JSON.stringify(jsonData);//converting to javascript object
console.log(jsonData.name)//John
console.log(typeof jsonData);//Object


