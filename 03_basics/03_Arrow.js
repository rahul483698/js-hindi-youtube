const user = {
    username : "Rahul",
    Price : 999,
    WelcomeMessage: function(){
        console.log(` Hey ${this.username},welcome to website`);
        console.log(this)//current context ko print karta hai (this)
    }
    
}

// user.WelcomeMessage();
// user.username="Ankit"
// user.WelcomeMessage();
// console.log(this)

function chai(){
    const user = "hitesh"
    console.log(this.user)//undefined =>kyuki this function ke ander kam nahi karta hai
}
//chai()

const chai2 = ()=>{
    const user = "hitesh"
    console.log(this.user)//undefined 
}
//chai2();

///////////////Arrow Function

const addTwo = (num1,num2)=>{
    return num1+num2;
}
const addThree = (num1,num2,num3)=>(num1+num2+num3);
console.log(addTwo(8,9))
console.log(addThree(5,7,3))