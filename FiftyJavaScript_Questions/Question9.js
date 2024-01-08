//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
function generateFibunnaciSwquence(terms){
    if(terms <= 0){
        return [];
    }
    else if(terms === 1){
        return [0];
    }
    else if(terms === 2){
        return [0, 1];
    }else{
        const fibunnaciSequence = [0, 1];
        for(let i=2;i<terms;i++){
            const nextNumber = fibunnaciSequence[i - 1] + fibunnaciSequence[i -2];
            fibunnaciSequence.push(nextNumber);
        }
        return fibunnaciSequence;
    }
}
const numberOfTerms = 8;
const result = generateFibunnaciSwquence(numberOfTerms);