import express from "express";
import myPageController from "../../controllers/myPageController.js";
const router = express.Router();

//UserName(account), 소유NFT 반환
router.get("/:name", myPageController.getMyInformation);

module.exports = router;
