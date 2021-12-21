var rpc = require('node-json-rpc');
var ip = require("ip");
var ipa = ip.address();
console.log("Local IP : ",ipa);

var options = {
    port: 9091,
    //host: '192.168.0.104',
    //host:'161.97.89.98',
    host:ipa,
    path: '/',
    strict: true
  };
  var client = new rpc.Client(options);

  module.exports=client