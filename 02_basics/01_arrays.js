const myArray=[1,4,3,2,3,2];
const myHeroes=["saktimaan","nagraj"];
const myArray2=new Array(1,2,5,3,7);

console.log(myArray[1])
//Array method
//myArray.push(9);
//myArray.pop();//9 ko delete kar diya

myArray.unshift(7)//add starting
myArray.shift()//remove starting element

// console.log(myArray);
// console.log(myArray.includes(23));
// console.log(myArray.indexOf(12));

const newArray1=myArray.join();//convert array to string 
console.log(newArray1);


//slice and splice

console.log("A",myArray);
const myn1=myArray.slice(1,4);
console.log(myn1);

console.log("B",myArray);
const myn2=myArray.splice(1,4);//splice original array ko manipulate kar deta hai aur end(4) bhi include karta hai
console.log(myn2);
console.log(myArray);