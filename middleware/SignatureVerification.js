//---------------------------
// Imports
//---------------------------

const keccak256 = require('keccak256');
const addresses = require('../db/address.json');
const Address = require('../models/Address');

//---------------------------
// Hashed Message Function
//---------------------------

const sendHash = async (req) => {
	if (Address.findOne(req.body)) {
		let address = req.body.address;
		console.log('Address found:', address);

		// The message that will be signed on the frontend will be the hashed address
		let hash = Buffer.from(keccak256(address));
		let message = hash.toString('hex');
		let hexMessage = `0x${message}`;
		return hexMessage;
	} else {
		console.log('No address found');
	}
};

module.exports = {
	sendHash,
};
