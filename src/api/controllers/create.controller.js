import * as userService from '../../services/user.service.js';
import * as nftService from '../../services/nft.service.js';
import User from '../../models/user.js';
import Nft from '../../models/nft.js' ;

export const createNFT1 = async (req, res) => {
  try {
    const fileUpload = req.body.fileUpload;
    const title = req.body.title;
    const link = null;
    const genre = req.body.genre;
    const part = req.body.part;
    const sell = req.body.sale;

    console.log(sell);

    await nftService.mintNFT(fileUpload, title, link, genre, part, sell);

    return res.status(200).json({
      status: 200,
      message: 'create 성공',
      sell: sell, // 프론트에서 보낸값을 받아줌
    });
  } catch (err) {
      console.log(err);
      throw err;
  }};

 
export const createNFT2 = async (req, res) => {
  try {
    const fileUpload = req.body.fileUpload;
    const title = req.body.title;
    const link = null;
    const genre = req.body.genre;
    const sell = req.body.sale;

    console.log(sell);

    await nftService.mintNFT(fileUpload, title, link, genre, sell);

    return res.status(200).json({
      status: 200,
      message: 'create 성공',
      sell: sell, // 프론트에서 보낸값을 받아줌
    });
  } catch (err) {
      console.log(err);
      throw err;
  }};
