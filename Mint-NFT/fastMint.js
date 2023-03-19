const express = require('express')
var parseUrl = require('body-parser')

const API_KEY = 'sk_live_d7c2e3b8-0ee2-4d22-9afb-2238ae85b03a';
const app = express()
let encodeUrl = parseUrl.urlencoded({ extended: false })

const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');


var multipart = require('connect-multiparty')
var multipartmiddleware = multipart();

app.get('/image', (req, res) => {
  res.sendFile(__dirname + '/form.html')
})

app.post('/image',multipartmiddleware, (req, res) => { 
  

// axios
var data = new FormData();
data.append('allowPlatformToOperateToken', req.body.allowPlatformToOperateToken);
data.append('chain', req.body.chain);
data.append('recipientAddress', req.body.recipientAddress);
data.append('filePath', fs.createReadStream(req.files.filePath.path));
data.append('name', req.body.name);
data.append('description', req.body.description);

var config = {
  method: 'post',
  url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromFile',
  headers: { 
    'X-API-Key': API_KEY, 
    ...data.getHeaders()
  },
  data : data
};

console.log("data",data);

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  res.send(JSON.stringify(response.data))
})
.catch(function (error) {
  console.log(error);
});

})

app.get('/url', (req, res) => {
    res.sendFile(__dirname + '/form2.html')
  })
  
  app.post('/url', encodeUrl, (req, res) => {
    console.log('Form request:', req.body)
   
	const sdk = require('api')('@verbwire/v1.0#hr2s143dl9hbr7s9');
  
  sdk.auth(API_KEY);
  sdk.post('/nft/mint/quickMintFromMetadataUrl', {
    allowPlatformToOperateToken: req.body.allowPlatformToOperateToken,
    chain: req.body.chain,
    metadataUrl: req.body.url,
    description: req.body.name,
    recipientAddress: req.body.recipientAddress,
  }, {accept: 'application/json'})
    .then(resp => res.send(resp))
    .catch(err => console.error(err)); 
  })
app.listen(8080)
