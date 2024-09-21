console.log("Start");
setTimeout(function cbT()
{
    console.log("CB SetTimeout");
},5000);

async function xyz(){
    let a= await fetch("https://dummy.restapiexample.com/api/v1/employees");
 console.log(a);


}
//let a=fetch("https://dummy.restapiexample.com/api/v1/employees");
xyz();


fetch("https://dummy.restapiexample.com/api/v1/employees").then(function cbf(){
    console.log("Cb Netyflix");
});
console.log("end");

