var rpc = require('node-json-rpc');
var ip = require("ip");
var ipa = ip.address();


var options = {
    port: 9091,
    host: '172.31.32.1',
    //host:ipa,
    path: '/',
    strict: true
  };
  var client = new rpc.Client(options);

  module.exports=client