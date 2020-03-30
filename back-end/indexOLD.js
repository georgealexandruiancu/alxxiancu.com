require("dotenv").config();

var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

// added cookies
app.use(cookieParser());

// include routes
const appRouterLogin = require("./router/login");
const appRouterStorage = require('./router/storage');
const appRouterBlog = require("./router/blog");
const appRouterPersonal = require("./router/personal");
const appRouterProjects = require("./router/projects");
const appRouterMails = require("./router/mails");

// added cors
var corsOptions = {
	origin: "http://localhost:3001",
	credentials: true
};
app.use(cors(corsOptions));

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

// app.use(middleware);
app.use(
	function (req, res, next) {
		console.log(req.headers.cookie);
		console.log(req.cookies);
		console.log(req.signedCookies[process.env.ADMIN_COOKIE_NAME]);
		if (req.cookies[process.env.ADMIN_COOKIE_NAME] === process.env.ADMIN_COOKIE) {
			console.log("ajunge aici ");
			req.user = true;
		}
		else {
			console.log("ajunge aici false");
			req.user = false;
		}

		console.log("req user here: " + req.user);

		next();
	}
);

// routes
app.use("/storage", appRouterStorage);
app.use("/blog", appRouterBlog);
app.use("/personal", appRouterPersonal);
app.use("/projects", appRouterProjects);
app.use("/mails", appRouterMails);
app.use("/login", appRouterLogin);
app.get("/whoami", (req, res, next) => {
	if (req.user) {
		res.json({ logged: true });
	} else {
		res.json({ logged: false });
	}
});

app.get('/',function(req,res){
	res.send("Rest API alxxiancu.com")
});


// set port, listen for requests
app.listen(3000, () => {
	console.log("Server is running on port 3000.");
});
