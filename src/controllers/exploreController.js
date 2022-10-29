var userService = require('../services/userService');  
var nftService = require('../services/nftService');
var transactionService = require('../services/transactionService');




module.exports = {
    //검색 전 페이지

    //기본 정렬 최신순         인기순,최신순,가격낮은순,가격높은순
    //도안Nft 가져오기 
    getDesignNft: async (req, res) => {
        try{
       
        const sort =req.params.sort; //정렬기준받기
        const tattooNft =await nftService.getTattoNft(sort);//한번에 4개 검색한 순으로 보내는 것이 더 좋을까?
        
        
       return res.status(200).json({
            status:200,
            message: "타투NFT가져오기 성공",
            nft: tattooNft
          
        });
    }catch(err)
    {
        console.log(err);
        throw err;
    }
           
    },

    //검색 후 페이지
    getNftByGenre: async (req, res) => {
        try{
       
        const genre=req.params.genre;//사용자가 지정한 장르
        const genreNft =await nftService.searchNftByGenre(genre);
     
       return res.status(200).json({
            status:200,
            message: "장르로 검색 성공!",
            nft: genreNft
          
        });
    }catch(err)
    {
        console.log(err);
        throw err;
    }
           
    },
    getNftByTheme: async (req, res) => {
        try{
           
            const theme=req.params.theme;//사용자가 지정한 주제
            const themeNft =await nftService.searchNftByTheme(theme);
           
           return res.status(200).json({
                status:200,
                message: "주제로 검색 성공",
                nft: themeNft
              
            });
        }catch(err)
        {
            console.log(err);
            throw err;
        }
           
    },
    getNftByPart: async (req, res) => {
        try{
            const part=req.params.part;//사용자가 지정한 주제
            const partNft =await nftService.searchNftByPart(part);
    
           return res.status(200).json({
                status:200,
                message: "부위로 검색 성공",
                nft: partNft
              
            });
        }catch(err)
        {
            console.log(err);
            throw err;
        }
           
    },
    getNftByGenreAndTheme: async (req, res) => {
        try{
            const genre=req.params.genre;//사용자가 지정한 장르
            const theme=req.params.theme;//사용자가 지정한 주제
            const genreAndThemeNft =await nftService.searchNftByGenreAndTheme(genre,theme);
            
            
           return res.status(200).json({
                status:200,
                message: "장르와 주제로 검색 성공",
                nft: genreAndThemeNft
              
            });
        }catch(err)
        {
            console.log(err);
            throw err;
        }
           
    },
    getArtistByGenre: async (req, res) => {
       
            try{
                const genre=req.params.genre;//사용자가 지정한 주제
                console.log(genre);
                const searchedArtist =await userService.searchArtistByGenre(genre);
        
               return res.status(200).json({
                    status:200,
                    message: "장르로 아티스트 검색 성공",
                    artist: searchedArtist
                  
                });
            }catch(err)
            {
                console.log(err);
                throw err;
            }
           
    }



    
    
}

