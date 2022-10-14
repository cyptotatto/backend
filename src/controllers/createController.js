var userService = require('../services/userService');  
var nftService = require('../services/nftService');
const User = require('../schemas/user');
const Nft = require('../schemas/nft');



const createNFT = {

create: (req, res) => {


  
 const user = new create(req.body);
 const response = user.createNFT();
 return res.json(response);
}

};

module.exports = {
    
createNFT,
           
};




