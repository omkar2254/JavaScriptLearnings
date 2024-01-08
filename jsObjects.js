//object
const student = {
    firstName: 'ram',
    class: 10
}

//The syntax to declare an object is:
const object_name ={
    key1: value1,
    key2: value2
}

//object creation
const person = {
    name: 'John', //name and age are the properties of the object
    age: 20
}
console.log(typeof person);//object

//Here's the syntax of the dot notation.
//objectName.key
console.log(person.name);//John

//Here is the syntax of the bracket notation.
//objectName["key"]
console.log(person["name"])//John

//An object can also contain another object. For example,
const car = {
    name: ferrari,
    price: 24,
    speed:{
        highway: 200,
        offRoad: 50
    }
}
console.log(car.speed);//{highway:200,offRoad:50}

console.log(car.speed.highway);//200

//In JavaScript, an object can also contain a function. For example,
const girl = {
    name: 'sophia',
    age: 30,
    //using function as value
    greet: function(){console.log('hello')}
}
girl.greet();//hello

//accessing object methods
girl.name;//sophia
girl.greet();//hello

//javascript built in methods
let number = '23.32';
let result = parseInt(number);
console.log(result);//23

//adding a method to a javascript object
let city = {};
city.name = 'Kolhapur';
city.greet = function(){
    console.log("Hello Kolhapur");
}
city.greet();//Hello Kolhapur

//this keyword
let employee = {
    empName:'Omkar',
    company: 'Capgemini',
    age: 22,

    greet: function(){
        let surname = 'Patil';
        console.log('The name is'+''+this.empName+''+surname);
    }
}
employee.greet();//The name is Omkar Patil
employe.company;//Capgemini

//JavaScript sets
//create set
const letters = new Set(['a','b','c']);

//Add values to the set
letters.add("p");
letters.add('s');
letters.add('q');

//add variables
const w = 'w';
const r = 'r';
letters.add(w);
letters.add(r);

//forEachin set
let text = '';
letters.forEach(function(value){
    text += value;
})
console.log(text);//abcpsqwr

//values()
const myIterator = letters.values();
let alpha = "";
for(const entry of myIterator){
    alpha += entry;
}
console.log(alpha);//abcpsqwr

//entries()
const iterator = letters.entries();
let digits = "";
for(const start of iterator){
    digits += start;
}
console.log(digits);//abcpsqwr

//sets are objects
typeof letters;//object
letters instanceof Set;//Returns true

//new Map()
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges",200]
]);

//add elements using set
fruits.set("cherry",100);
fruits.set("dragonFruit",500);

fruits.set("apples",600);//change existing values
fruits.get("bananas")//300
fruits.delete("apples");//remove element
fruits.clear();//clear all elements
fruits.has("apples");//return true if exists in a map

typeof fruits;//returns object
fruits instanceof Map;//returns true











