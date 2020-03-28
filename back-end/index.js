require("dotenv").config();

var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// routes
const appRouterStorage = require('./router/storage');
const appRouterBlog = require("./router/blog");
const appRouterPersonal = require("./router/personal");
const appRouterProjects = require("./router/projects");
const appRouterMails = require("./router/mails");

// added cors
app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var middleware = (req, res, next) => {

	if (process.env.IS_PROD === "true") {
		if (req.get("host").includes(process.env.HOST_PROD)) {
			next();
		}
		else {
			res.sendStatus(401);
		}
	}
	else {
		if (req.get("host").includes(process.env.HOST_DEV)) {
			next();
		} else {
			res.sendStatus(401);
		}
	}

}

app.use(middleware);

// routes
app.use("/storage", appRouterStorage);
app.use("/blog", appRouterBlog);
app.use("/personal", appRouterPersonal);
app.use("/projects", appRouterProjects);
app.use("/mails", appRouterMails);

app.get('/',function(req,res){
	res.send("Rest API alxxiancu.com")
});


// set port, listen for requests
app.listen(3000, () => {
	console.log("Server is running on port 3000.");
});
