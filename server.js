//imports
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();

//Env variables
const PORT = process.env.PORT || 8080;
const MONGODB_URI =
	'mongodb+srv://user:Pdd%247425@mongo-app.emhpp.mongodb.net/test';

//Routers
const routes = require('./routes/api');

//Connecting to mongoose
mongoose.connect(MONGODB_URI || 'mongodb://localhost/restaurant', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Mongoose connected!');
});

mongoose.connection.on('error', () => {
	console.log('Error');
});

//HTTP Logger
app.use(morgan('tiny'));

//Routing
app.use('/api', routes);

//Express listen
app.listen(PORT, console.log(`Server starting at port ${PORT}`));

//Adding data
// const data = {
// 	name: 'Rachada',
// 	type: 'Thai',
// 	rating: 3,
// 	address: '123 Los Angeles Ave',
// 	isOpen: true,
// };

//Saving data
// const newRestaurant = new restaurant(data);
// newRestaurant.save((error) => {
// 	if (error) {
// 		console.error(error);
// 	} else {
// 		console.log('Data Saved!');
// 	}
// });
