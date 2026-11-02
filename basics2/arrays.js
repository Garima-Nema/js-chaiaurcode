const myarr=[1, 2, 3, 4, 5];
console.log(myarr)


const myarr2=new Array(1,2,3,4,5,6)

console.log(myarr2)

//Methods

myarr.push(9)
console.log(myarr)
myarr.pop()
console.log(myarr)


myarr.unshift(10)
console.log(myarr)

myarr.shift()
console.log(myarr)


console.log(myarr.includes(19))

console.log(myarr.indexOf(3))

const newarr=myarr.join()
console.log(newarr)
console.log(typeof(newarr))

myarr.slice(1,3)
console.log(myarr.slice(1,3))

splarr=myarr.splice(2,4)
console.log(splarr)
console.log(myarr)