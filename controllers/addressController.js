const express = require('express');
const router = express.Router();
const Address = require('../models/Address');
// importing the merkle tree and root hash from merkeltree js file
const { sendHexProof } = require('../middleware/MerkleTree');

// router.post('/proof/', async (req, res) => {
// 	try {
// 		// the plan is to grab the wallet address from the front end

// 		// this attempt requires me to have /:id at the end of the api route
// 		// const address = await Address.findById(req.params.id);

// 		// this approach requires me to send the address in the body
// 		const address = await Address.findOne(req.body);

// 		// const address = String(req.body);
// 		// hash the address
// 		// const claimingAddress = keccak256(address);
// 		const claimingAddress = keccak256(Buffer.from(String(address)));

// 		// return the proof
// 		const hexProof = merkleTree.getHexProof(claimingAddress);
// 		// send the proof back to the frontend to be used in the smart contract
// 		// res.status(200).send(hexProof);

// 		// returns a response with the address
// 		// res.status(200).send(address);

// 		res.status(200).send({ body: JSON.stringify(hexProof) });
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

router.post('/proof/', async (req, res) => {
	try {
		// the plan is to grab the wallet address from the front end

		// this attempt requires me to have /:id at the end of the api route
		// const address = await Address.findById(req.params.id);

		// this approach requires me to send the address in the body
		// const address = await Address.findOne(req.body);
		const merkleProof = await sendHexProof(req);
		res.status(200).send(merkleProof);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
