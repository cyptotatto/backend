
import express from 'express';

const createRouter= express.Router();

import * as createController from '../controllers/create.controller.js';


//NFT만들기

//createRouter.post('/illustration', createController.createNFT.create);

//createRouter.post('/pict', createController.createNFT.create);

export default createRouter;
