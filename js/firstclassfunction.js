//function statement aka function declaration
function a(){
    console.log("a is called");
}
a();
// function expression
var b=function(){
    console.log("b called");//Difference between the two is (function statement&expression is hoisting.)
}// a can be called before creating but b can't be called thats hoisting,in case of b it will throw error.
b();
// Anonymus function: Those function who don't have any value.
//function () {//uses: These functions are used wherever we we need to use a function as value.
//console.log(a);//line 7 to 10 is the best example to show how fuction acts like a value.
//}

//Difference between Parameters and Arguments
var d=function(param1,param2)//param 1&2 are parameters can't be accessed outside the function.
{
    console.log("Shivansh");
}
d(1,2);//1,2 are arguments
//Passing function inside another function as arguments
var e=function(param11)
{
    console.log(param11);
}
function xyx()
{} 
e(xyx);
//First class function:Ability to use function as values.
var k=function(para1){
    return function xyz(){

    }
}
console.log(k());

