
import express from 'express';
const likeRouter = express.Router();
import * as nftController from '../controllers/nft.controller.js';
import * as userController from '../controllers/user.controller.js';
import * as likeController from '../controllers/like.controller.js';




//mode:nft,user,   objectId 
likeRouter.post("/:userAccount/:mode/:objectId",likeController.upLike);
likeRouter.get("/user/:userAccount",likeController.getLikeArtist);
likeRouter.get("/nft/:userAccount",likeController.getLikeNft);




  

  export default likeRouter;