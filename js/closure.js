/*function x()
{
    var a=10;
    function y()
    {
        console.log(a);
    }
    y();
}
x();*/// This is closure or basic idea of closure.
 // Closure is a function along with its lexical enviorment.

 // we can assign function to a variable
/* function xx()
 {
    var a=10;
    function yy()
    {
        console.log(a);
    }
    
     return yy;
 }
 var c=xx();
 console.log(c);
 c();
//ANOTHER WAY OF WRITING A FUNCTION
 function xxx()
 {
    var d=20;
    return function yyy(){//returning function directly
        console.log(d);
    }

 }
 var k=xxx();
 console.log(k);
 k();*/
 //CORNER CASES
function s()
{
    var q=20;
    function v()
    {
        console.log(q); 
    }
    q=100;
    v();
}
s();
