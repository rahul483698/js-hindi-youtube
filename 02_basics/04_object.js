//const tinderUser = new Object() //singleton object
const tinderUser = {}  //non singleton

tinderUser.id ="123abc";
tinderUser.name="rahul"
tinderUser.isLoggedIn =false;
//console.log(tinderUser);

const regularUser ={
    email:"rahul@23883gmail.com",
    fullName:{
        userFullName:{
            firstName:"rahul",
            lastName:"kumar",
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1={1:"one",2:"two"};
const obj2={3:"three",4:"four"};
//const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2};

console.log(obj3);
