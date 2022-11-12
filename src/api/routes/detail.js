import express from 'express';


const detailRouter= express.Router();

import * as detailController from '../controllers/detail.controller.js';


detailRouter.get('/nft', detailController.getNftDetail);

detailRouter.get('/artist', detailController.getArtistDetail);

export default detailRouter;

