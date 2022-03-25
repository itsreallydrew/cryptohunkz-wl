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
