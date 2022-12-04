import likeItemList from './temp.js';

const a = new likeItemList({
    userAccount :"aa",
    nfts: [{nftId: "aa"},{nftId: "bb"}],
    artists:[{artistAccount: "aa"},{artistAccount: "bb"}]
})

const b = new likeItemList({
    userAccount :"2",
    nfts: [{nftId: "aa"},{nftId: "bb"}],
    artists:[{artistAccount: "aa"},{artistAccount: "bb"}]
})
let c=new Object();
c.aa=a;

const q=[];
const nftGenre="꽃"
const nftTheme="바다"

q.push( "genre:"+ nftGenre);
q.push(  "theme"+ nftTheme);


// {
//     genre: nftGenre,
//     theme: nftTheme,
//     sale: true,
//   }


console.log(q);
console.log("----------------");

//console.log( c.reverse());

// console.log("----------------");
// console.log(a.nfts);

// console.log("----------------");
// console.log(a.artists.reverse());