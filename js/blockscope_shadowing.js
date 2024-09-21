/*var a=100;
{
    var a=10; //shadowing
    let b=100;
    const c=1000;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); //prints 10 in case of var

let d=100;
{
    var a=100;
    let d=10;
    const f=1000;
    console.log(a);
    console.log(d);// shadowing
    console.log(f);}
    console.log(d);// prints 100 not 10 like case in var
    // same goes for const like we did for let.

    //shadowing is also done in methods.*/
    var aa=1000;
    function x(){
        let ab=10;
        const ac=100;
        const aa=2000;
        console.log(aa);

        console.log(ab);
        console.log(ac);
    }
    x(); //function invoking
    console.log(aa);
    //ILLEGAL SHADOWING
    /*let a=100;
    {
        var a=10;
        console.log(a);
    }*/
   

//Valid Shadowing
var a=100;
{
    let a=20;
    console.log(a);
}
