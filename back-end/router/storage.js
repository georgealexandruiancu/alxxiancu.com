require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
var fs = require("fs");

const router = express.Router();

var mysql = require("mysql");

var con = mysql.createPool({
	connectionLimit: 10,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});

// SET STORAGE
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '../front-end/public/uploads')
	},
	filename: function (req, file, cb) {
		cb(
			null,
			"alxxiancu-" +
				Date.now() +
				path.extname(file.originalname).toLowerCase()
		);
	}
})

var upload = multer({ storage: storage })

router.post("/uploadfiles", upload.array("myFiles", 10), (req, res, next) => {
	const files = req.files;

	if (!files) {
		const error = new Error("Please choose files");
		error.httpStatusCode = 400;
		return next(error);
	}

	files.map((item) => {
		let getAbsolutePath = item.path.replace(/\\/g, "/");
		let getPath = "/uploads/" + getAbsolutePath.split("/")[4];

		con.getConnection(err => {
			if (err) {
				console.log(err);
				const error = new Error("We cannot handle this request");
				error.httpStatusCode = 400;
				return next(error);
			}

			var sql = "INSERT INTO storage (path, path_absolute) VALUES ('"+ getPath +"','"+ getAbsolutePath +"')";

			con.query(sql, (err, result) => {
				if (err) {
					console.log(err);
					const error = new Error("We cannot handle this request");
					error.httpStatusCode = 400;
					return next(error);
				}
			});
		});
	});

	res.sendStatus(200);
});



router.delete("/delete", (req, res, next) => {

	let data = req.body;

	let id = data.id;
	let filename = data.filename;

	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("Your file id didn't exists");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "DELETE FROM storage WHERE id='" + id + "'";

		con.query(sql, (err, result) => {
			if (err) {
				console.log(err);
				const error = new Error("Your file id didn't exists");
				error.httpStatusCode = 400;
				return next(error);
			}

			if (result.affectedRows) {
				var filePath =
					"../front-end/public/uploads/" + filename;
				fs.unlink(filePath, (err) => {
					if (err) {
						console.log(err);
						const error = new Error("Your file id didn't exists");
						error.httpStatusCode = 400;
						res.sendStatus(400);
						return next(error);
					}

					console.log("a file was deleted: " + filePath);

					res.sendStatus(200);
				});
			}
		});
	});
});


router.get("/", (req, res, next) => {
	con.getConnection(err => {
		if (err) {
			console.log(err);
			const error = new Error("It's seems to be a problem with database");
			error.httpStatusCode = 400;
			return next(error);
		}

		var sql = "SELECT * FROM storage";

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