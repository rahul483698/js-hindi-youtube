let name = "rahul";
let RepoCount = 50;
//console.log(name+RepoCount+"value")

//console.log(`my name is ${name} and my repo ${RepoCount}`)

const gameName = new String("rahul");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("h"));

const newString = gameName.substring(0,4); //Swaps start and end if start > end. example:-
//const str = "Hello World";
// console.log(str.substring(0, 5)); // Output: "Hello"
// console.log(str.substring(5, 0)); // Output: "Hello" (swaps indices)
// console.log(str.substring(6));    // Output: "World"
// console.log(newString); 

const anotherString = gameName.slice(0,4); //More versatile due to negative index support.
console.log(anotherString);
 const str = "Hello World";
// console.log(str.slice(0, 5));     // Output: "Hello"
// console.log(str.slice(5, 0));     // Output: "" (does not swap indices)
// console.log(str.slice(-5));       // Output: "World" (negative index)

const newStringOne= gameName.trim();//space remove,tabs,newline
//console.log(newStringOne);

const newStringTwo= gameName.replace("r","n");
//console.log(newStringTwo);

const newStringFour=gameName.includes("r")//checked 
console.log(newStringFour);//true

console.log(str.split(" "))



