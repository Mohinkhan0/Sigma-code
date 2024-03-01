
// document.title="MOhin khan";

// console.log("Hii MOhin khan");
// document.body
// document.body.firstElementchildNodes
// document.firstElementchild.children






// let cont=document.body.childNodes[2];

// cont.firstChild.style.color="red";

// cont.firstElementchild.style.color="green";

// <=================================================================>
//  How can we get element with the help of id ,class  and QuarySelector

console.log("Hii MOhin khan");

let boxes=document.getElementsByClassName("box");
console.log(boxes)

boxes[2].style.backgroundColor = "red";


// ====================================================  By Id

let ides = document.getElementById("ides");
console.log(ides);

  ides.style.color="blue";
  ides.style.backgroundColor="yellow";


//  ================================================= By QuarySelector

document.querySelector(".box").style.backgroundColor="green";

//  It will change only first metch in our class

// ========================================================   By QuerySelectorAll

document.querySelectorAll(".box").forEach( e  =>
    // console.log(e)
    e.style.border=" 2px solid brown"
    )

