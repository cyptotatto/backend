import express from 'express';
const router = express.Router();

import rankingController from '../controllers/ranking.controller';

//도안 hot 100, 아티스트 hot 100 반환
router.get('/', rankingController.getHotItem); //,(req, res));

module.exports = router;
