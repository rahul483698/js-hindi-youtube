//  stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "rahulmusic"

let anothername = myYoutubeName
anothername = "rahulcode"

console.log(myYoutubeName);


console.log(anothername);

let user = {
    email: "user@123gmail.com",
    upi:"user@123",
}  // variable stack me store hoga aur ye object ka detals heap me

let userTwo = user //dusra variable me jo bhi change karenge wo first wale me bhi hoga

userTwo.email = "rahul@123.com"
console.log(user.email);
console.log(userTwo.email);