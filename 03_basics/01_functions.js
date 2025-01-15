function addTwoNumber (num1,num2){
    console.log(num1+num2);
}
// addTwoNumber(2,7);
// addTwoNumber(19,12);

function HeroInFormula (s,a,b,c){
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
}

//HeroInFormula(132,122,22,120);

function LoginUserMessage(UserName){
    if(UserName === undefined){
        console.log("please enter username");
        return 
    }
    return `${UserName} just logged In`
}

//LoginUserMessage("rahul"); //function return ho jayega but print n hoga kuchh
// console.log(LoginUserMessage());
// console.log(LoginUserMessage("rahul"));

function CalculateCartPrice(var1,var2,...Item){
    return Item
}
//console.log(CalculateCartPrice(112,134,980,123));

/*************function with object********* */

const User={
    Username:"Rahul kumar",
    price:700
}
function handleObject(anyObject){
    return `Username is ${anyObject.Username} and price is ${anyObject.price}`

}
console.log(handleObject(User));