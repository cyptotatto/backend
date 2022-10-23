const express = require('express');
const router = express.Router();
const detailController = require('../../controllers/detailController');



router.get('/nft',detailController.getNftDetail); 
 

router.get('/artist',detailController.getArtistDetail);



module.exports = router;