//Write a JavaScript program to find the largest element in a nested array. 
function findLargestElement(Array){
    let LargestElement = 0;

    for(let i=0;i<myNestedArray.length;i++){
        for(let j=0;j<myNestedArray[i].length;j++){
            if(myNestedArray[i][j] > LargestElement){
                LargestElement = myNestedArray[i][j];
            }
        }
    }

    return LargestElement;
}
const myNestedArray = [
    [1,2,3],
    [6,7,8],
    [9,4,5]
];

const result =  findLargestElement(myNestedArray);
console.log(result);