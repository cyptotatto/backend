<<<<<<< HEAD
import express from 'express';
let router = express.Router();
import detailController from '../controllers/detailController.js';
=======
const express = require('express');
const router = express.Router();
const detailController = require('../../controllers/detail.controller');
>>>>>>> e2e632f (feat: Detail,Create logic)

router.get('/nft', detailController.getNftDetail);

router.get('/artist', detailController.getArtistDetail);

<<<<<<< HEAD
module.exports = router;
=======
router.get('/nft',detailController.getNftDetail); 
 

router.get('/artist',detailController.getArtistDetail);

router.get('/buy',detailController.getBuy);

module.exports = router;
>>>>>>> e2e632f (feat: Detail,Create logic)
