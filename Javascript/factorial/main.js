// let  num=5;
//  let fact=1;

// for (let i = num; i >0; i--) {
     
//     fact=fact*i;
// }
// console.log(fact);

function factorial(number) 
{
    let arr=Array.from(Array(number+1).keys());
    console.log(arr.slice(1,));

      let c=   arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c);
}
let  num=5;
factorial(num);

// (5) [1, 2, 3, 4, 5]

//  output => 120

