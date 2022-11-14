import express from 'express';

const createRouter= express.Router();

import * as createController from '../controllers/create.controller.js';



createRouter.post('/illustration', createController.createNFT1);

createRouter.post('/pict', createController.createNFT2);

export default createRouter;
