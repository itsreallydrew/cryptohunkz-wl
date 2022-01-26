const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 7001);

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Redirect
// app.get('/', (req, res) => {
// 	res.redirect('api/address');
// });

// Controllers
const addressController = require('./controllers/addressController');
app.use('/api', addressController);

// Start Server
app.listen(app.get('port'), () => {
	console.log('✅ Listening on port 7001 🚀');
});

// -------------------------------
// MERKLE TREE Implementation
// -------------------------------

// const { MerkleTree } = require('merkletreejs');
// const keccak256 = require('keccak256');

// const addresses = require('./address.json');
// const hashedAddresses = addresses.map((addr) => keccak256(addr));
// const merkleTree = new MerkleTree(hashedAddresses, keccak256, {
// 	sortPairs: true,
// });

// exports.handler = async (event) => {
// 	const [_, address] = event.path.split('/');
// 	const hashedAddress = keccak256(address);
// 	const proof = merkleTree.getHexProof(hashedAddress);

// 	const response = {
// 		statusCode: 200,
// 		body: JSON.stringify(proof),
// 	};

// 	return response;
// };
