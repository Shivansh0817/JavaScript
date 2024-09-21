const radius=[3,4,5,6];
const area= function(radius)
{
    return Math.PI*radius*radius;
};
const calculatearea = function(radius,logic){
const output = [];
for(let i=0;i<radius.length;i++)
{
    output.push(logic(radius[i]));
}
return output;
};
console.log(calculatearea(radius));
