const sdk = require('api')('@verbwire/v1.0#hr2s143dl9hbr7s9');

sdk.auth('sk_live_bef695c6-4af0-4a52-8899-928695c8e929');
sdk.get('/nft/data/transactions', 
        {
  				walletAddress: '0x04BDFB3Dd61b993c017a7355185Ee205EcA0bf8B', 
  			  chain: 'ethereum'
				})
  .then(res => console.log(`${JSON.stringify(res)}`))
  .catch(err => console.error(err));