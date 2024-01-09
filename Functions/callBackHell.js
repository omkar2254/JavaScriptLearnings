// console.log("Hello");

// setTimeout(function(){
//     console.log("SetTimeOut");
// },3000)

// console.log("World");


//callback hell
function getCheese(callback){
    setTimeout(()=>{
        const cheese = "🧀";
        console.log("Here is cheese", cheese);
        callback(cheese);
    }, 3000);
}
function makeDough(cheese, callback){
    setTimeout(()=>{
        const dough = cheese +"🫓";
        console.log("Here is dough", dough);
        callback(dough);
    },4000);
}
function makePizza(cheese, dough, callback){
    setTimeout(()=>{
        const pizza = cheese + dough + "🍕";
        console.log("Pizza is ready", pizza);
        callback(pizza);
    }, 5000);
}

getCheese((cheese)=>{
    makeDough(cheese, (dough)=>{
        makePizza(cheese, dough, (pizza)=>{
            console.log("Let's eat "+pizza);
        })
    })
})
