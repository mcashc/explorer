const express = require('express');
const router = express.Router();
const axios = require("axios");


router.get('/', (request, response) => { 
    response.render("index.ejs", {title: 'MCash Cryptocurrency'});
})


router.get('/explorer', (request, response) => { 
    /*
        axios.get("http://localhost:3000/api/blocks")
               .then(data =>{
                    //console.log(data["data"][0])
                    response.render("explorer", {title: 'MCash Explorer',blocks:data["data"]});
               })
               .catch(err =>{
                   //console.log(err)
                   response.render("explorer", {title: 'MCash Explorer',blocks:[]});
               });*/
    response.render("explorer.ejs", {title: 'MCash Explorer'});           
})

router.get('/explorer/blocks', (request, response) => { 
    response.render("allblock.ejs", {title: 'All Blocks'});
})

router.get('/explorer/txs', (request, response) => { 
    response.render("alltrx.ejs", {title: 'All Transactions'});
})

router.get('/explorer/block/:block', (request, response) => { 
    const params = request.params;
    block = params.block
    response.render("block.ejs", {title: 'Block #'+block,block:block});
})

router.get('/explorer/trx/:hashid', (request, response) => { 
    const params = request.params;
    hashid = params.hashid
    response.render("trx.ejs", {title: 'Transaction '+hashid,hid:hashid});
})

router.get('/explorer/address/:address', (request, response) => { 
    const params = request.params;
    address = params.address
    response.render("addressinfo.ejs", {title: 'Address '+address,addres:address});
})

router.get('/explorer/pending/trx', (request, response) => { 
    response.render("pendingtrx.ejs", {title: 'Pending Transactions '});
})



router.get('/access/wallet', (request, response) => { 
    response.render("walletaccess.ejs", {title: 'Create Address Or Login'});
})

router.get('/account', (request, response) => { 
    response.render("account.ejs", {title: 'Dashboard'});
})

module.exports=router