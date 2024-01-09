let userDetails = {
  name : "Omkar Patil",
  age: 23,
  designation: "Software Engineer",
  printDetails: function(){
    console.log(this.name);
  }
}
userDetails.printDetails();

let userDetails2 = {
    name: "Abhi Palke",
    age: 23,
    designation: "Mechanical Engineer",
}
//function borrowing
userDetails.printDetails.call(userDetails2);

//outside function
let printDesignation = function(state, country){
    console.log(this.designation+" "+state+" "+country);
}

printDesignation.call(userDetails, "Maharashtra", "India");