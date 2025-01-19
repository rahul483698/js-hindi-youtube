//Immadiately Invoked function Expression(iife),global polution se bachne ke liye use kiya jata hai

(function chai(){
    //named IIFE
    console.log(`data base connected`)
})();//semicolom very very importent agar do IIFE likhna ho to nahi to second IIFE error dega

((name)=>{
    //Unkown IIfe
    console.log(`data base 2 connected ${name}`)
})("rahul");


