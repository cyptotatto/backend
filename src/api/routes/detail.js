import express from "express";
const router = express.Router();
import detailController from "../controllers/detailController.js";

router.get("/nft", detailController.getNftDetail);

router.get("/artist", detailController.getArtistDetail);

module.exports = router;
