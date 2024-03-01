
let rand=Math.random();
let first , second , third;

if(rand<=0.33)
{
    first="Crazy";
}
else if(rand<=0.66 && rand>=0.33)
{
    first="Amazing";
}
else{
    first="Fire";
}


// Second name 
rand=Math.random();
if(rand<=0.33)
{
    second="Food";
}
else if(rand<=0.66 && rand>=0.33)
{
    second="Garments";
}
else{
    second="Enterprises";
}

//  third  name 
rand=Math.random();
if(rand<=0.33)
{
    third="Brose";
}
else if(rand<=0.66 && rand>=0.33)
{
    third="Limited";
}
else{
    third="Hub";
}

console.log(`${first}  ${second}  ${third}`);
document.write(rand*100);

document.write(`${first}  ${second}  ${third}`);