import * as userService from '../../services/user.service.js';
import * as nftService from '../../services/nft.service.js';
import User from '../../models/user.js';
import Nft from '../../models/nft.js' ;



export const createNFT1 = async (req, res) => {
  try {
    const file = req.file.location; //s3에 저장된 file정보패스(경로)를 뽑아서 써야함
    const title = req.body.title;
    const link = null;
    const explanation =req.body.explanation;
    const sort =req.body.sort;
    const genre = req.body.genre;
    const theme = req.body.theme;
    const part = req.body.part;
    const sale = req.body.sale;
    const price = req.body.price;

    console.log(sort);

    
    await nftService.mintNFT(file, title, link, explanation, sort, genre, theme, part, sale, price);

    return res.status(200).json({
      status: 200,
      message: 'create 성공',
    });
  } catch (err) {
      console.log(err);
      throw err;
  }};
    