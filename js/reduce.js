const arr=[2,3,4,5,6];
//sum of arrays element
function findsum(arr){
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i];
}
return sum;
}
console.log(findsum(arr));
//Now we see the exact use of reduce
const out=arr.reduce(function (acc,curr){
    acc=acc+curr;
    return acc;

},0);
console.log(out);
// in reduce we use acc,curr...acc is used for storing like in above example as sum and curr is used for elements of array.

//example 2
//finding the max element
function findmax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
}
console.log(findmax(arr));
//Now we'll use reduce function
const outt=arr.reduce(function (max,curr){
if(curr>max)
{
    max=curr;
}
return max;
},0);
console.log(outt);
