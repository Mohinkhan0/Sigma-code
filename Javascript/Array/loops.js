let arr=[1,2,3,4,20,5,6];

// for (let index = 0; index < arr.length; index++) {
//   let  element = arr[index];
//   console.log(element);
    
// }

// arr.forEach((value,index,arr) => {
//     console.log(value,index,arr);
// });
  // output

  /*
             1 0 (7) [1, 2, 3, 4, 20, 5, 6]
             2 1 (7) [1, 2, 3, 4, 20, 5, 6]
             4 3 (7) [1, 2, 3, 4, 20, 5, 6]
             20 4 (7) [1, 2, 3, 4, 20, 5, 6]
             3 2 (7) [1, 2, 3, 4, 20, 5, 6]
             5 5 (7) [1, 2, 3, 4, 20, 5, 6]
             6 6 (7) [1, 2, 3, 4, 20, 5, 6]
  */

let newarr=arr.map((e)=>{
    return e**2;
});

console.log(newarr);