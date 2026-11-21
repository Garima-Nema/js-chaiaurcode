let a=10;
var b=20
const c=30

if(true){
    const c=100
    console.log(c)
}
console.log(c)

//intresting case 
console.log(addone(5))
function addone(num){
    return num+1
}


//console.log(addtwo(5))//this will give error because addtwo is a function expression and it is not hoisted
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))