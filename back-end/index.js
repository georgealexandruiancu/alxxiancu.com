var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// routes
const appRouterStorage = require('./router/storage');
const appRouterBlog = require("./router/blog");
const appRouterPersonal = require("./router/personal");

// added cors
app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// ROUTES

// routes
app.use("/storage", appRouterStorage);
app.use("/blog", appRouterBlog);
app.use("/personal", appRouterPersonal);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});


// set port, listen for requests
app.listen(3000, () => {
	console.log("Server is running on port 3000.");
});
