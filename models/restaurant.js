const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
	name: String,
	type: String,
	rating: Number,
	address: String,
	isOpen: Boolean,
});

//Model
const restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = restaurant;
