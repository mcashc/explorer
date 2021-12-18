var rpc = require('node-json-rpc');
var ip = require("ip");
var ipa = ip.address();
console.log("Local IP : ",ipa);

var options = {
    port: 9091,
    host: '172.24.16.1',
    //host:ipa,
    path: '/',
    strict: true
  };
  var client = new rpc.Client(options);

  module.exports=client