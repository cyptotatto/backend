import express from 'express';
const homeRouter= express.Router();
//let rankingController =require('../controllers/ranking.controller.js');


import * as rankingController from '../controllers/ranking.controller.js';

//도안 hot 100, 아티스트 hot 100 반환
homeRouter.get('/', rankingController.getHotItem); //,(req, res));

//module.exports = router;
export default homeRouter;
