const coding = ["js","cpp","pythan","ruby"]
const value = coding.forEach((item)=>{
    //console.log(item)
    return item  //kuchh return nahi karega kyuki ye return nahi karta hai foreach
})

//console.log(value);//return nahi karega kuchh for each isliye undeafined milega

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums= mynums.filter((num)=>num>4)
/*const newnums = mynums.filter((num)=>{
    return num>4;
})
    11 aur 12 line wala code same hai agar function me scope wali parenthsis rahega to retun use karna parega */
//console.log(newnums);

const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

//console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((books)=>books.genre==='History')
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
