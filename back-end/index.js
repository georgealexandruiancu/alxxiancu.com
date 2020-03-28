require("dotenv").config();

var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

// routes
const appRouterLogin = require("./router/login");
const appRouterStorage = require('./router/storage');
const appRouterBlog = require("./router/blog");
const appRouterPersonal = require("./router/personal");
const appRouterProjects = require("./router/projects");
const appRouterMails = require("./router/mails");

// added cors
app.use(cors());
app.use(cookieParser());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/login", appRouterLogin);

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

var whoami = (req, res, next) => {
	if (req.cookies[process.env.ADMIN_COOKIE_NAME] == process.env.ADMIN_COOKIE) {
		req.user = true;
	}
	else {
		req.user = false;
	}

	next();
}

app.use(middleware);
app.use(whoami);

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
