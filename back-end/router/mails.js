require("dotenv").config();

const express = require("express");

const router = express.Router();

var mysql = require("mysql");

var con = mysql.createPool({
	connectionLimit: 10,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});

router.post("/add", (req, res, next) => {
	let today = new Date();
	let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+"|"+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();;

	let sender = req.body.sender;
	let subject = req.body.subject;
	let message = req.body.message;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql =
			"INSERT INTO mails (date, sender, subject, message) VALUES ('" + date + "', '" + sender + "', '" + subject + "', '" + message + "')";

		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);
				const error = new Error(
					"It's seems to be a problem with database"
				);
				error.httpStatusCode = 400;
				return next(error);
			}

			if (result) {
				res.sendStatus(200);
			}
		});
	});
});

router.get("/get", (req, res, next) => {

	if (!req.user) {
		res.sendStatus(401);
	}

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "SELECT * FROM mails ORDER BY date DESC";

		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);
				const error = new Error(
					"It's seems to be a problem with database"
				);
				error.httpStatusCode = 400;
				return next(error);
			}

			res.send(JSON.parse(JSON.stringify(result)));
		});
	});
});

module.exports = router;
