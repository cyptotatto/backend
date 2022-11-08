<<<<<<< HEAD
import express from 'express';
const homeRouter= express.Router();
//let rankingController =require('../controllers/ranking.controller.js');
=======
const express = require('express');
const router = express.Router();
// var userController = require('../../controllers/UserController');
// var nftController = require('../../controllers/NftController');
var rankingController = require('../../controllers/ranking.controller');
>>>>>>> e2e632f (feat: Detail,Create logic)

import * as rankingController from '../controllers/ranking.controller.js';

//도안 hot 100, 아티스트 hot 100 반환
homeRouter.get('/', rankingController.getHotItem); //,(req, res));

//module.exports = router;
export default homeRouter;
