import express from 'express';

const detailRouter= express.Router();

import * as detailController from '../controllers/detail.controller.js';

detailRouter.get('/nft/:id', detailController.getNftDetail);

detailRouter.get('/artist/:account', detailController.getArtistDetail);

export default detailRouter;
