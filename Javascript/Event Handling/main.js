let a= prompt("enter any number")
let b=prompt("enter second number")

let sum= parseInt(a) + parseInt(b)
if(isNaN(a) || isNaN(b))
{
    throw SyntaxError("Soory  enter any number");
}
console.log("YOur Sum = " + sum);


// if we dont any error is come in our program so we use try catch method 
function main()
{ 
    let x=2;
    try {
        console.log("YOur Sum = " + sum*x);
        return true;
    } catch (error) {
        console.log("some error");
        return false;
    }
    finally{
        console.log("file close !!!! ");
    } 
}

let c=main();