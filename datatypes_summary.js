//two types of datatypes
//1.primitive datatypes
//2.reference datatypes

//1.primitive datatypes
//1.strings 2.numbers 3.boolean 4.null 5.undefined 6.symbol 7.bigint

//2.reference datatypes
//1.objects 2. arrays 3.functions

const id=Symbol("123")

const bignumber=1234555n

//Arrays

const fruits=["apple","banana","mango"]

let myobj={
    name:"garima",
    age:22
}

const myfunction=function(){
    console.log("hello");
}

console.log(typeof(bignumber))
console.log(typeof(myobj))
console.log(typeof(myfunction))