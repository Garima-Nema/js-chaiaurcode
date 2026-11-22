user={
    username:"Garima",
    age:21,
    greet:function(){
        console.log(user.username);
        console.log(this)
    }
}
user.greet();
user.username="sam";
user.greet();


user1={
    username:"yash",
    age:21,
    greet:function(){
        console.log(this.username)
    }
}
user2={
    username:"kanu",
    age:21,
    greet:user1.greet
}
user1.greet();
user2.greet();

//Arrow function
const addition=(num1,num2)=> num1+num2;

console.log(addition(4,7));
