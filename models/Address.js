const mongoose = require('../db/connections');

const AddressSchema = new mongoose.Schema({
	address: String,
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;
