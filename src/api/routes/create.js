import express from 'express';


let router = express.Router();
import createController from '../controllers/create.controller';


//NFT만들기

router.post('/illustration', createController.createNFT.create);

router.post('/pict', createController.createNFT.create);

module.exports = router;
