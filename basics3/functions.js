function saymyname(username){
    return username
}
saymyname("Garima")

function add(num1,num2){
    let sum=num1+num2
    console.log(sum)
    return sum;
}
add(4,5)


//we dont know the number of arguments that will be passed to the function
//REST OPERATOR
function shoppingCart(...num){
    return num
}
console.log(shoppingCart(200,300,400,500))

function cart(value1,value2,...items){
    return items
}
console.log(cart(200,300,400,500,600,700))