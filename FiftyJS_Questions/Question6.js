//Write a JavaScript program to calculate the factorial of a given number. 

function calFactorial(num){
    if(num < 0){
        return "Enter valid number!";
    }else if(number === 1){
        return 1;
    }else{
        let factorial = 1;
        for(let i=1;i<=num;i++){
            factorial *= i;
        }
        return factorial;
    }
}

// const userInput = prompt("Enter a user input");
// const userNumber = parseInt(userInput);

const userNumber = 10;

if(!isNaN(userNumber)){
    const result = calFactorial(userNumber);
    console.log(`Factorial of ${userNumber} is: ${result}`);
}else{
    console.log("Invalid Number!");
}