//Write a JavaScript function to check if a given number is prime. 
function isPrime(myNum){
    if(myNum < 1){
        return false;
    }
    
    for(let i=2;i<=Math.sqrt(myNum);i++){
        if(myNum % i===0){
            return false;
        }
    }

    return true;
}
const myNum = 14;
console.log(`${myNum} is prime: ${isPrime(myNum)}`);