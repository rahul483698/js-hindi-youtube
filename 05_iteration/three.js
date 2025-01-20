// for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const element of arr) {
    //console.log(element)
}

const greeting = "Hello world!"
for(const greet of greeting){
    //console.log(`each character is ${greet}`)
}

//Map

const map = new Map()
map.set('In',"india")
map.set('USA',"United state of America")
map.set('Fr',"france")

// console.log(map);

for(const [key,value] of map){
    //console.log(key,':-',value);
}



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }