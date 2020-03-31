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

router.post("/add/education", (req, res, next) => {

	let date_start = req.body.date_start;
	let date_end = req.body.date_end;
	let title = req.body.title;
	let position = req.body.position;

	var sql = "INSERT INTO personal_education (date_start, date_end, title, position) VALUES ("+ con.escape(date_start) +", "+ con.escape(date_end) +", "+ con.escape(title) +", "+ con.escape(position) +")";

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

router.delete("/delete/education", (req, res, next) => {

	let id = req.body.id;

	var sql = "DELETE FROM personal_education WHERE id=" + con.escape(id);

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

router.put("/update/education", (req, res, next) => {

	let id = req.body.id;
	let date_start = req.body.date_start;
	let date_end = req.body.date_end;
	let title = req.body.title;
	let position = req.body.position;

	var sql = "UPDATE personal_education SET date_start = " + con.escape(date_start) + ", date_end = " + con.escape(date_end) +", title = " + con.escape(title) +", position = " + con.escape(position) +" WHERE id = " + con.escape(id);

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


router.post("/add/languages", (req, res, next) => {

	let title = req.body.title;

	var sql = "INSERT INTO personal_languages (title) VALUES ("+ con.escape(title) +")";

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

router.delete("/delete/languages", (req, res, next) => {

	let id = req.body.id;

	var sql = "DELETE FROM personal_languages WHERE id=" + con.escape(id) + "";

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

router.put("/update/cv", (req, res, next) => {

	let id = 1;
	let file = req.body.file;
	let title = req.body.title;

	var sql = "UPDATE personal_cv SET file = " + con.escape(file) + ", title = " + con.escape(title) +" WHERE id = " + con.escape(id);

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

router.put("/update/information", (req, res, next) => {

	let id = 1;
	let description = req.body.description;
	let profile_image = req.body.profile_image;
	let location = req.body.location;

	var sql = "UPDATE personal_information SET description = " + con.escape(description) + ", profile_image = " + con.escape(profile_image) + ", location = " + con.escape(location) +" WHERE id = " + con.escape(id);

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

router.get("/get/cv", (req, res, next) => {

	var sql = "SELECT * FROM personal_cv";

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

router.get("/get/languages", (req, res, next) => {

	var sql = "SELECT * FROM personal_languages";

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

router.get("/get/information", (req, res, next) => {


	var sql = "SELECT * FROM personal_information";

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

router.get("/get/education", (req, res, next) => {

	var sql = "SELECT * FROM personal_education";

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