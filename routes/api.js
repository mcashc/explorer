const express = require('express')
const router = express.Router();
const client = require("../rpcclient");


router.get('/addressinfo/:address', (req, res) => { 
    const params = req.params;
    address = params.address
    client.call(
        {"jsonrpc": "2.0", "method": "getAddressInfo", "params":[address],"id": 0},
        function (err, re) {
          if (err) {
              res.json([])
            }
          else { 
            res.json(re.result[0])
          }
        }
      )   
})

router.get('/supply', (req, res) => { 
    client.call(
        {"jsonrpc": "2.0", "method": "getSupply","id": 0},
        function (err, re) {
          if (err) {
              res.json([])
            }
          else { 
            res.json(re.result[0])
          }
        }
      )   
})

router.get('/blocks', (req, res) => { 
  client.call(
      {"jsonrpc": "2.0", "method": "getAllBlock","id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result)
        }
      }
    )   
})

router.get('/trxs', (req, res) => { 
  client.call(
      {"jsonrpc": "2.0", "method": "getAllTransaction","id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result)
        }
      }
    )   
})

router.get('/chainStatus', (req, res) => { 
  client.call(
      {"jsonrpc": "2.0", "method": "chainStatus","id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.send(re.result)
        }
      }
    )   
})

router.get('/getBalance/:address', (req, res) => { 
  const params = req.params;
  address = params.address
  client.call(
      {"jsonrpc": "2.0", "method": "getBalance","params":[address],"id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.send(re.result)
        }
      }
    )   
})

router.get('/getTrxInfo/:hash', (req, res) => { 
    const params = req.params;
    hash = params.hash
  client.call(
      {"jsonrpc": "2.0", "method": "getTrxInfo","params":[hash],"id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result[0])
        }
      }
    )   
})

router.get('/blockInfoHeight/:num', (req, res) => { 
    const params = req.params;
    num = params.num
  client.call(
      {"jsonrpc": "2.0", "method": "blockInfoHeight","params":[num],"id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result[0])
        }
      }
    )   
})

router.get('/blockInfoHash/:hash', (req, res) => { 
    const params = req.params;
    hash = params.hash
    client.call(
      {"jsonrpc": "2.0", "method": "blockInfoHash","params":[hash],"id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result[0])
        }
      }
    )   
})

router.get('/genesis', (req, res) => { 
  client.call(
      {"jsonrpc": "2.0", "method": "genesisBlock","id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result)
        }
      }
    )   
})

router.get('/lastblock', (req, res) => { 
  client.call(
      {"jsonrpc": "2.0", "method": "lastblock","id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result)
        }
      }
    )   
})

router.get('/blockHeight', (req, res) => { 
  client.call(
      {"jsonrpc": "2.0", "method": "lastblockHeight","id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          var last = String(re.result)
          res.json([{"height":last}])
        }
      }
    )   
})

router.get('/pendingTrx', (req, res) => { 
  client.call(
      {"jsonrpc": "2.0", "method": "pendingTrx","id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result)
        }
      }
    )   
})

router.post('/addTransaction', (req, res) => { 
  key=req.body.key
  to_address=req.body.to_address
  amount=req.body.amount
  client.call(
      {"jsonrpc": "2.0", "method": "addTransaction","params":[key,to_address,amount],"id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result[0])
        }
      }
    )   
})

router.post('/newAddress', (req, res) => { 
  client.call(
      {"jsonrpc": "2.0", "method": "newAddress","id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result[0])
        }
      }
    )   
})

router.post('/signCheckAddress', (req, res) => { 
  key=req.body.key
  client.call(
      {"jsonrpc": "2.0", "method": "signCheckAddress","params":[key],"id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.json(re.result[0])
        }
      }
    )   
})

router.get('/resolve', (req, res) => { 
  client.call(
      {"jsonrpc": "2.0", "method": "resolve","id": 0},
      function (err, re) {
        if (err) {
            res.json([])
          }
        else { 
          res.send(re.result)
        }
      }
    )   
})

router.post('/test', (req, res) => { 
    data = req.body
    console.log(data.name)
    res.json(data) 
})


module.exports=router