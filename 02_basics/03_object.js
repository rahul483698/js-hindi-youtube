//singleton
//object.create

//object literals
const jsUser = {
    name:"rahul",
    "fullName":"rahul kumar",//isko access karne ke liye=>jsUser["fullName"]
    age: 19,
    location: "siwan",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoggedInDay:["monday","saterday"],

}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullName"]);