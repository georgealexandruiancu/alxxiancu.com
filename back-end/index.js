var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

// added cors
app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (res) => {
	res.json({ message: "Welcome to alxxiancu.com REST API." });
});

// set port, listen for requests
app.listen(3000, () => {
	console.log("Server is running on port 3000.");
});
