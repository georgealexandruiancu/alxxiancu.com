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

	var sql = "INSERT INTO blog (photo, short_description, body, title, path, tags) VALUES ("+ con.escape(photo) +","+ con.escape(shortDescription) +","+ con.escape(body) +","+ con.escape(title) +","+ con.escape(path) +","+ con.escape(tags) +")";

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
});

router.put("/update", (req, res, next) => {

	let id = req.body.id;
	let photo = req.body.photo;
	let shortDescription = req.body.shortDescription;
	let body = req.body.body;
	let title = req.body.title;
	let path = req.body.path;
	let tags = req.body.tags;


	var sql = "UPDATE blog SET photo = " + con.escape(photo) + ", short_description = " + con.escape(shortDescription) + ", body = " + con.escape(body) +", title = " + con.escape(title) +", path = " + con.escape(path) +", tags = " + con.escape(tags) + " WHERE id = " + con.escape(id);

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
	});
});

router.delete("/delete", (req, res, next) => {

	let id = req.body.id;

	var sql = "DELETE FROM blog WHERE id=" + con.escape(id);

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
});

router.get("/get-post/:id/:path", (req, res, next) => {
	let id = req.params.id;
	let path = req.params.path;

	var sql = "SELECT * FROM blog WHERE id=" + con.escape(id) + " AND path=" + con.escape(path);

	con.query(sql, (err, result) => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		res.send(JSON.parse(JSON.stringify(result)));
	});
});


router.get("/", (req, res, next) => {

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
});

module.exports = router;