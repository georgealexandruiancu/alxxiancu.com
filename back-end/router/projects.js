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
	let photo = req.body.photo;
	let description = req.body.description;
	let title = req.body.title;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql =
			"INSERT INTO projects (photo, description, title) VALUES ('" + photo + "', '" + description + "', '" + title + "')";

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

router.delete("/delete", (req, res, next) => {
	let id = req.body.id;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "DELETE FROM projects WHERE id='" + id + "'";

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
	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "SELECT * FROM projects";

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
