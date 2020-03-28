require("dotenv").config();

const express = require("express");

const router = express.Router();

const sha1 = require("sha1");

var mysql = require("mysql");

var con = mysql.createPool({
	connectionLimit: 10,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});


router.post("/make-owner", (req, res, next) => {
	let email = req.body.email;
	let password = sha1(req.body.password);

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error(
				"It's seems to be a problem with database"
			);
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "SELECT * FROM admin WHERE email = '"+ email +"' AND password='" + password +"'";

		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);
				const error = new Error(
					"NO ADMIN FOR THIS REQUEST"
				);
				error.httpStatusCode = 400;
				return next(error);
			}

			if (result.length) {
				res.cookie(process.env.ADMIN_COOKIE_NAME, process.env.ADMIN_COOKIE, {httpOnly: true, maxAge: 900000});
				res.sendStatus(200);
			}
			else {
				res.clearCookie(process.env.ADMIN_COOKIE_NAME);
				res.sendStatus(401);
			}
		});
	});
});

router.get("/die", (req, res, next) => {
	res.clearCookie(process.env.ADMIN_COOKIE_NAME);
	res.sendStatus(200);
	next();
});

module.exports = router;
