//Filter function is used to filter values of array on the basis of some logic.
const arr=[5,6,7,8,9,3];
function isodd(x){
    return x%2!=0;

}
const output=arr.filter(isodd);
console.log(output);
const outputt=arr.filter(function iseven(x){
    return x%2==0;
});
console.log(outputt);