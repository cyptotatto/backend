import express from 'express';
import * as detailController from '../controllers/detail.controller.js';

const router = express.Router();



router.get('/:account', detailController.getArtistDetail);



export default router;