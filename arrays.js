const array1 = ["eat", "sleep"];

const array2 = new Array("eat","sleep");

// empty array
const myList = [ ];

// array of numbers
const numberArray = [ 2, 4, 6, 8];

// array of strings
const stringArray = [ 'eat', 'work', 'sleep'];

// array with mixed data types
const newData = ['work', 'exercise', 1, true];

//You can also store arrays, 
//functions and other objects inside an array. For example,
const newData2 = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];

//Access elements of an array
const myArray = ['h','e','l','l','o'];
//first element
console.log(myArray[0]);//'h'
//second element
console.log(myArray[1]);//'e'

//add element
let dailyActivities = ['eat','sleep'];
//add an element at the end
dailyActivities.push('exercies');
console.log(dailyActivities);//['eat','sleep','exercise']

let dailyRoutine = ['eat','sleep'];
//add an element at the start
dailyRoutine.unshift('exercies');
console.log(dailyRoutine);//['exercise','eat','sleep']

dailyRoutine[2] = 'meditate';
console.log(dailyRoutine);//['exercise','eat','meditate']

dailyRoutine[4] = 'code';
console.log(dailyRoutine)//['exercise','eat','meditate','undefined','code']

//pop operation
dailyRoutine.pop();
console.log(dailyRoutine);//['exercise','eat','meditate','undefined']

const popElement = dailyRoutine.pop();
console.log(popElement);//'undefined' or empty element

console.log(dailyRoutine);//['exercise','eat','meditate']

//remove the first element 
dailyRoutine.shift();
console.log(dailyRoutine);//['eat','medidate']

//array length
console.log(dailyRoutine.length);//2

//Javascript array methods
let dailySchedule = ['sleep','work','exercise'];
let newRoutine = ['eat'];
let ages = [4,9,16,25,36,49];
//sorting elements in alphabetical order
dailySchedule.sort();
console.log(dailySchedule);//['exercise','sleep','work']

//finding the index position of string
let position = dailySchedule.indexOf('work');
console.log(position);//2

//slicing the array elements
const newDailySchedule = dailySchedule.slice(1);
console.log(newDailySchedule);//'sleep','work'

//concatenating two arrays
const routine = dailySchedule.concat(newRoutine);
console.log(routine);//['exercise','sleep','work','eat']

//filter an array
const adults = ages.filter(checkAdult);
function checkAdult(age){
    return age>=18;
}
console.log(adults);//[25,36,49]

//map a function to an array
const ages_sqrt = ages.map(Math.sqrt);
console.log(ages_sqrt);//[2,3,4,5,6,7]

/* Since arrays are objects the array elements are stored by reference 
   Hence when an array value is copied any change in the copied array will 
   also reflect in the original array */
let arr = ['h','e'];
let arr1 = arr;
arr1.push('l');

console.log(arr);//["h","e","l"]
console.log(arr1);//["h","e","l"]

//You can also store values by passing a named key in an array. For example,
arr.name = 'John'; //not recommended
console.log(arr);//["h","e"]
console.log(arr.name);//"John"
console.log(arr['name']);//"John"


// multidimensional array
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];


let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// multidimensional array
let studentsdata = [student1, student2, student3];
studentsdata.push(['Omkar',22]);
console.log(studentsdata);//[['Jack', 24], ['Sara', 23], ['Peter', 24],['Omkar',22]]


let x = [
    ['Jack', 24],
    ['Sara', 23],
    ['Peter', 24]
    ];
    
// access the first item
console.log(x[0]); // ["Jack", 24]
    
// access the first item of the first inner array
console.log(x[0][0]); // Jack
    
// access the second item of the third inner array
console.log(x[2][1]); // 24

x[1][2] = 'Omkar';
console.log(x);//[['Jack',24],['Sara',23,Omkar],['Peter',24]]

//using push
x[1].push(22);
console.log(x);//[['Jack',24],['Sara',23,Omkar,22],['Peter',24]]

//using splice at index 1
x.splice(1,0,['Jenny',24]);
console.log(x);//[['Jack',24],['Jenny',24],['Sara',23,Omkar,22],['Peter',24]]

//using pop to remove an element
x.pop();
console.log(x);//[['Jack',24],['Jenny',24],['Sara',23,Omkar,22]]

x[1].pop();
console.log(x);//[['Jack',24],['Jenny'],['Sara',23,Omkar,22],['Peter',24]]

//Iterating in a multidimensional array
x.forEach((student)=>{
    student.forEach((data)=>{
        console.log(data);
    })
})
/*output:
Jack
24
Jenny
Sara
23
Omkar
22
Peter
24
*/

//for of mehtod
for(let i of x){
    for(let j of i){
        console.log(j); //output as above
    }
}

//for loop
for(let i=0;i<x.length;i++){
    let innerArrayLength = x[i].length;
    for(let j=0;j<innerArrayLength;j++){
        console.log(x[i][j]);//output as above
    }
}




