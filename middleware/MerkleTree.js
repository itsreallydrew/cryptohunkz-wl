// //---------------------------
// // Imports
// //---------------------------
// const { MerkleTree } = require('merkletreejs');
// const keccak256 = require('keccak256');
// const addresses = require('../db/address.json');
// const Address = require('../models/Address');

// //---------------------------
// // Merkle Tree logic
// //---------------------------
// const leafNodes = addresses.map((addr) => keccak256(addr));
// const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
// const rootHash = merkleTree.getHexRoot();
// console.log(rootHash);

// //---------------------------
// // Hex Proof Function
// //---------------------------
// const sendHexProof = async (req) => {
// 	// search for matching address entry in database if true run the following logic
// 	if (Address.findOne(req.body)) {
// 		let address = req.body.address;
// 		console.log('The address found:', address);

// 		// hash the address
// 		let hashedAddress = keccak256(address);
// 		// console.log('The hashed address:\n', hashedAddress);

// 		// get the hex proof of the hashed address
// 		let proof = merkleTree.getHexProof(hashedAddress);
// 		// console.log(proof);
// 		return proof;
// 	} else {
// 		return console.log('User not on whitelist');
// 	}
// };

// module.exports = {
// 	sendHexProof,
// };
