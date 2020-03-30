require("dotenv").config();

const express = require("express");

const router = express.Router();

var mysql = require("mysql");

var con = mysql.createPool({
	connectionLimit: 50,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});

router.post("/add", (req, res, next) => {

	let data = req.body;

	let photo = data.photo;
	let shortDescription = data.shortDescription;
	let body = data.body;
	let title = data.title;
	let path = data.path;
	let tags = data.tags;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "INSERT INTO blog (photo, short_description, body, title, path, tags) VALUES ('"+ photo +"','"+ shortDescription +"',"+ con.escape(body) +",'"+ title +"','"+ path +"','"+ tags +"')";

		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);
				const error = new Error("It's seems to be a problem with database");
				error.httpStatusCode = 400;
				return next(error);
			}

			if (result) {
				res.sendStatus(200);
			}
		})
	})
});

router.put("/update", (req, res, next) => {

	let id = req.body.id;
	let photo = req.body.photo;
	let shortDescription = req.body.shortDescription;
	let body = req.body.body;
	let title = req.body.title;
	let path = req.body.path;
	let tags = req.body.tags;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "UPDATE blog SET photo = '" + photo + "', short_description = '" + shortDescription + "', body = '" + body +"', title = '" + title +"', path = '" + path +"', tags = '" + tags + "' WHERE id = '" + id +"'";

		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);
				const error = new Error("It's seems to be a problem with database");
				error.httpStatusCode = 400;
				return next(error);
			}

			if (result) {
				res.sendStatus(200);
			}
		})
	})
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

		var sql = "DELETE FROM blog WHERE id='" + id + "'";

		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);
				const error = new Error("It's seems to be a problem with database");
				error.httpStatusCode = 400;
				return next(error);
			}

			if (result.affectedRows) {
				res.sendStatus(200);
			}
		})
	})
});

router.get("/get-post/:id/:path", (req, res, next) => {
	let id = req.params.id;
	let path = req.params.path;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "SELECT * FROM blog WHERE id='" + id + "' AND path='" + path + "'";

		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);
				const error = new Error("It's seems to be a problem with database");
				error.httpStatusCode = 400;
				return next(error);
			}

			res.send(JSON.parse(JSON.stringify(result)));
		});
	})
});


router.get("/", (req, res, next) => {
	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "SELECT * FROM blog ORDER BY id DESC";

		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);
				const error = new Error("It's seems to be a problem with database");
				error.httpStatusCode = 400;
				return next(error);
			}

			res.send(JSON.parse(JSON.stringify(result)));
		});
	})
});

module.exports = router;