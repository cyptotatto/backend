import * as nftService from '../../services/nft.service.js';


export const createNft = async (req, res) => {
    try {
     
        console.log("???" + req.body.sale);
        //console.log(req.file.location);

         const awsUrl = req.file.location;
        const title = req.body.title;
        const link = req.body.link;
        const explanation =req.body.explanation;
        const tattooDesign= req.body.tattooDesign;
        const holder= req.body.userAccount; 
        const artistAccount= req.body.userAccount;
        const genre = req.body.genre;
        const theme = req.body.theme;
        const part = req.body.part;
        const sale = req.body.sale;
        const price = req.body.price;
   
       const createResult = await nftService.insertNft
       (awsUrl,
        title,
        link,
        explanation,
        tattooDesign,
        holder,
        artistAccount,
        genre,
        theme,
        part,
        sale,
        price);
  
      return res.status(200).json({
        status: 200,
        message: 'nft create',
        url: awsUrl,
        result :createResult
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
//nft 랭킹
  export async function getNftRanking  (req, res)  {
    try {
      
      const nftRanking = await nftService.getHotNFT(); //nft top100
    
      return res.status(200).json({
        status: 200,
        message: '랭킹 가져오기 성공',
        // data: nftRanking
        nftTop100: nftRanking,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

