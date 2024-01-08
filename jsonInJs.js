/* JSON stands for Javascript Object Notation. 
   JSON is a text-based data format that is used to store and transfer data. 
   For example, */

//JSON Syntax
// JSON object
const data = {
    "name": "Omkar",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.hobby.reading);//true
console.log(data.class[1]); // HTML

//Converting json to javascript object
const jsonData = {"name":"John","age":22};

JSON.stringify(jsonData);//converting to javascript object
console.log(jsonData.name)//John
console.log(typeof jsonData);//Object


