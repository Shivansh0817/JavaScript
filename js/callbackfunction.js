//What is calledback function in JS?
function x(y){
console.log("x");
y();
}
x(function y(){// function y is passed in function x now its responsibilty of x whenever it calls it back.
console.log("y");
})
//Another example has been taken in settime out case
setTimeout(function(){
    console.log("Timer");
},5000);