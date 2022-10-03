const express = require('express');
const router = express.Router();
var userController = require('../../controllers/UserController');
var nftController = require('../../controllers/NftController');

//타투도안 반환
router.get('/tattoo',nftController.getNFT, (req, res) => {
    return ;//res.json({ user: req.currentUser }).status(200);
  });
//아티스트 반환
router.get('/artist',  userController.getArtist, (req, res) => {
    return ;//res.json({ user: req.currentUser }).status(200);
  });s
//장르로 필터링 한 도안 반환
router.get('/tattoo/:genre', nftController.getGenreNFT, (req, res) => {
return ;//res.json({ user: req.currentUser }).status(200);
});
//주제로 필터링 한 도안 반환
router.get('/tattoo/:theme', nftController.getThemeNFT, (req, res) => {
    return ;//res.json({ user: req.currentUser }).status(200);
    });
//부위로 필터링 한 도안 반환
router.get('/tattoo/:part',  nftController.getPartNFT, (req, res) => {
    return ;//res.json({ user: req.currentUser }).status(200);
    });
module.exports = router;
