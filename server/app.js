const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const { MONGOURI } = require("./keys");

// Connecting to MongoDB
mongoose.connect(MONGOURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// On MongoDB connection
mongoose.connection.on("connected", () => {
	console.log("Connected to Mongo");
});
mongoose.connection.on("error", (err) => {
	console.log("Error on mongo connect!", err);
});

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

//UxyMaORRiWkc20az

// App.listen(PORT)
app.listen(PORT, () => {
	console.log(`Port running on port ${PORT}`);
});
