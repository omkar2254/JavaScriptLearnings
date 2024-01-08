let person = {
    name: "John",
    age: 20,
    showInfo: function(realAge){
        console.log(this.name + ' is ' + realAge);
    }
}

console.log(person.name);
person.showInfo(27);

console.log(typeof person.showInfo);

function incrementAge(person){
    person.age++;
}
incrementAge(person);
console.log(person.age);


let message = 'Hello';
function changeMessage(){
    message = 'Hii there'
}

console.log(changeMessage());//undefined coz function did not return anything
console.log(message);

