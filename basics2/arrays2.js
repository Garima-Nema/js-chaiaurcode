const marvel=["thor","ironman","spiderman"]
const dc=["superman","batman","flash"]

//marvel.push(dc)

console.log(marvel)
console.log(marvel.length)

//console.log(marvel[3][1])

//const newarr=marvel.concat(dc)
//console.log(newarr)

const new_heros=[...marvel,...dc]
console.log(new_heros)

arr3=[1,2,3,[6,7,8],4,5,[1,3,[14,15]]];
arr4=arr3.flat(2)
console.log(arr4)

console.log(Array.from("garima"))
console.log(Array.isArray("garima"))

let score1=100;
let score2=200;
console.log(Array.of(score1,score2))