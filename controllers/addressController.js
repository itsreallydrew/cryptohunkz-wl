const express = require('express');
const router = express.Router();
// importing function from middleware
const { sendHexProof } = require('../middleware/MerkleTree');

// ---------------------------
// POST route for WL Addresses
// ---------------------------
router.post('/proof/', async (req, res) => {
	try {
		// placed all logic in middleware function sendHexProof
		const merkleProof = await sendHexProof(req);
		console.log(merkleProof);
		res.status(200).send(merkleProof);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;

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
