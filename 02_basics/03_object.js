//singleton
//object.create

const mySem = Symbol("key1");


//object literals
const jsUser = {
    name:"rahul",
    "fullName":"rahul kumar",//isko access karne ke liye=>jsUser["fullName"]
    age: 19,
    [mySem]:"mykey1",
    location: "siwan",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoggedInDay:["monday","saterday"],

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySem]);

jsUser.email="rahul@chatgpt.com";
//Object.freeze(jsUser); //bad me change nahi hoga freeze karne se
jsUser.email="rahul@microsoft.com";
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello jsuser");
}
jsUser.greetingTwo =function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

