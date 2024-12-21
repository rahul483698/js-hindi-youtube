const marval_heros = ["thor","Ironman","spiderman"]
const Dc_heros = ["superman","flash","batman"]

//marval_heros.push(Dc_heros)
// console.log(marval_heros);
// console.log(marval_heros)[3][1];

// const All_heros = marval_heros.concat(Dc_heros);
// console.log(All_heros);

const allNewHero = [...marval_heros,...Dc_heros];//sprade operator
//console.log(allNewHero);

const anotherArray = [2,3,1,[4,5,6],[1,9,6,[1,6]],7];
//console.log(anotherArray.flat(Infinity));

console.log(Array.isArray("rahul"));
console.log(Array.from("rahul"));
console.log(Array.from({name: "rahul"}));//intresting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));