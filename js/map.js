// map is used to transform the value
const arr=[5,1,2,3,6];
// Transformation of the elements of array
function double(x)
{
    return x*2;
}
const output =arr.map(double);
console.log(output);
// Another way of using the map functio(shortcut/higher order)
const outputt =arr.map(function tripple(x){
    return x*3;
});
console.log(outputt);
//To binary
const out=arr.map(function binary(x){
    return x.toString(2);
});
console.log(out);
