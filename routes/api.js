const express = require('express');

const router = express.Router();

const restaurant = require('../models/restaurant');

//Routes
router.get('/', (req, res) => {
	restaurant
		.find({})
		.then((data) => {
			console.log('Data : ', data);
			res.json(data);
		})
		.catch((error) => {
			console.log(error);
		});
});

module.exports = router;
