// primitive

//7 types: string,Number, Boolean , null, undefined,Symbol ,Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);//false

const bigNumber = 27372847284792n
//Reference (non primitive)

//Array , Objects , function

const heros = ["shaktiman","naagraj","doga"]
let myObj ={
    name: "rahul",
    age: 22,
}

const myFunction = function(){
    console.log("hello");
}
