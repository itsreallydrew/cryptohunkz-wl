const Item = require('../models/Address');
const seedData = require('./address.json');

Item.deleteMany({})
	.then(() => {
		console.log('All items deleted!');
		return Item.insertMany(seedData);
	})
	.then((items) => {
		console.log(items);
		console.log('Items created ✅');
		console.log('Goodbye! 👋');

		process.exit();
	})
	.catch(console.error);
