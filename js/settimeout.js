/*function x(){
    for(var i=1;i<=5;i++){ // prints 6 everytime because value of i increments very fast befor callback function runs.
        setTimeout(function(){
    console.log(i);},i*1000);
}
console.log("Shivansh Srivastava");
}
x();*/
//Instead of using var use let because let is a block scope so every time after completion of 1 loop it acts as a new copy of variabe. 
function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
    console.log(i);},i*1000);
}
console.log("Shivansh Srivastava");
}
x();