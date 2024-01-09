let details = {
    name: "Omkar",
    age: 23,
    number: 1,
    designation: "Software engineer",
    printDetails: function(){
        console.log(this.name);
    }
}
details.printDetails();

let userDetails2 = {
    name: "Abhi Palke",
    age: 23,
    designation: "Mechanical Engineer",
}

details.printDetails.call(userDetails2);

let allDetails = function(age, designation){
    console.log(this.name+" "+age+" "+designation);
}

//apply
allDetails.apply(details, ["Maharashtra", "Frontend Developer"]);