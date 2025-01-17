let a=5;
const b = 10;
var c = 15;
//{}=> scope (if ,else and function)
if(true){
    let a=10;
    const b = 17;
    var c = 13;  
}
// console.log(a)
// console.log(b)
//console.log(c) //13 print karega kyuki var global scope jaisa kam karta isliye isko use nahi karna chahiye

function one(){
    const username = "rahul"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);//website globaly define n kiya gya hai function scope ke ander hai
    two();
}

//one();

/*nested function me inner function outer function ki variable excess kar sakta hai*/

console.log(addOne(5));
function addOne(num){
    return num+1;
}
console.log(addTwo(5));//error kyuki function variable me store hai
const addTwo = function(num){
    return num+2;
}

