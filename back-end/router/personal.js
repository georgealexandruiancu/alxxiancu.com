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

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "INSERT INTO personal_education (date_start, date_end, title, position) VALUES ('"+ date_start +"', '"+ date_end +"', '"+ title +"', '"+ position +"')";

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

router.delete("/delete/education", (req, res, next) => {

	let id = req.body.id;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "DELETE FROM personal_education WHERE id='" + id + "'";

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

router.put("/update/education", (req, res, next) => {

	let id = req.body.id;
	let date_start = req.body.date_start;
	let date_end = req.body.date_end;
	let title = req.body.title;
	let position = req.body.position;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "UPDATE personal_education SET date_start = '" + date_start + "', date_end = '" + date_end +"', title = '" + title +"', position = '" + position +"' WHERE id = '" + id +"'";

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


router.post("/add/languages", (req, res, next) => {

	let title = req.body.title;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "INSERT INTO personal_languages (title) VALUES ('"+ title +"')";

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

router.delete("/delete/languages", (req, res, next) => {

	let id = req.body.id;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "DELETE FROM personal_languages WHERE id='" + id + "'";

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

router.put("/update/cv", (req, res, next) => {
	let id = 1;
	let file = req.body.file;
	let title = req.body.title;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "UPDATE personal_cv SET file = '" + file + "', title = '" + title +"' WHERE id = '" + id +"'";

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

router.put("/update/information", (req, res, next) => {
	let id = 1;
	let description = req.body.description;
	let profile_image = req.body.profile_image;
	let location = req.body.location;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "UPDATE personal_information SET description = '" + description + "', profile_image = '" + profile_image +"', location = '" + location +"' WHERE id = '" + id +"'";

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

router.get("/get/cv", (req, res, next) => {
	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

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
	})
});

router.get("/get/languages", (req, res, next) => {
	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

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
	})
});

router.get("/get/information", (req, res, next) => {
	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

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
	})
});

router.get("/get/education", (req, res, next) => {
	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

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
	})
});

module.exports = router;