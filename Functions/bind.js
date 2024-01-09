let userDetails = {
    name: "Omkar",
    age: 23,
    userDetails: "Software Engineer"
}
let printDetails = function(){
    console.log(this.name+" "+this.age+" "+this.userDetails);
}
let newFun = printDetails.bind(userDetails);
newFun();

