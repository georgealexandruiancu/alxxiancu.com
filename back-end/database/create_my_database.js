require("dotenv").config();

var mysql = require("mysql");

function CreateTabels() {
	var con = mysql.createPool({
		connectionLimit: 10, // default = 10
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME
	});

	con.getConnection(function(err) {
		if (err) throw err;
		console.log("Connected!");
		var sql = `CREATE TABLE personal_information (
			id INT DEFAULT '1',
			description LONGTEXT,
			profile_image VARCHAR(500),
			location VARCHAR(500)
		)`;

		con.query(sql, function(err, result) {
			if (err) {
				if (err.errno === 1050) {
					console.log(
						"Table %cpersonal_information already exist! Skipping...",
						"color:red;"
					);
					return ;
				}
			}
			if (!err) {
				console.log(
					"Table %cpersonal_information created",
					"color:red;"
				);
			}
		});

		sql = `CREATE TABLE personal_cv (
			id INT DEFAULT '1',
			file VARCHAR(500),
			title VARCHAR(500)
		)`;

		con.query(sql, function(err, result) {
			if (err) {
				if (err.errno === 1050) {
					console.log(
						"Table %cpersonal_cv already exist! Skipping...",
						"color:red;"
					);
					return;
				}
			}
			if (!err){
				console.log("Table %cpersonal_cv created", "color:red;");
			}
		});

		sql = `CREATE TABLE personal_education (
			id INT NOT NULL AUTO_INCREMENT,
			date_start VARCHAR(100),
			date_end VARCHAR(100),
			title VARCHAR(200),
			position VARCHAR(200),
			PRIMARY KEY (id)
		)`;

		con.query(sql, function(err, result) {
			if (err) {
				if (err.errno === 1050) {
					console.log(
						"Table %cpersonal_education already exist! Skipping...",
						"color:red;"
					);
					return;
				}
			}

			if (!err) console.log(
							"Table %cpersonal_education created",
							"color:red;"
						);
		});

		sql = `CREATE TABLE personal_languages (
			id INT NOT NULL AUTO_INCREMENT,
			title VARCHAR(200),
			PRIMARY KEY (id)
		)`;

		con.query(sql, function(err, result) {
			if (err) {
				if (err.errno === 1050) {
					console.log(
						"Table %cpersonal_languages already exist! Skipping...",
						"color:red;"
					);
					return;
				}
			}
			if (!err) console.log(
							"Table %cpersonal_languages created",
							"color:red;"
						);
		});

		sql = `CREATE TABLE projects (
			id INT NOT NULL AUTO_INCREMENT,
			photo VARCHAR(500),
			description VARCHAR(150),
			title VARCHAR(100),
			PRIMARY KEY (id)
		)`;

		con.query(sql, function(err, result) {
			if (err) {
				if (err.errno === 1050) {
					console.log(
						"Table %cprojects already exist! Skipping...",
						"color:red;"
					);
					return;
				}
			}
			if (!err) console.log("Table %cprojects created", "color:red;");
		});

		sql = `CREATE TABLE blog (
			id INT NOT NULL AUTO_INCREMENT,
			photo VARCHAR(500),
			short_description VARCHAR(200),
			body LONGTEXT,
			title VARCHAR(150),
			path VARCHAR(200),
			tags VARCHAR(500),
			PRIMARY KEY (id)
		)`;

		con.query(sql, function(err, result) {
			if (err) {
				if (err.errno === 1050) {
					console.log(
						"Table %cblog already exist! Skipping...",
						"color:red;"
					);
					return;
				}
			}
			if (!err) console.log("Table %cblog created", "color:red;");
		});

		sql = `CREATE TABLE mails (
			id INT NOT NULL AUTO_INCREMENT,
			date VARCHAR(100),
			sender VARCHAR(200),
			subject VARCHAR(200),
			message TEXT(150),
			PRIMARY KEY (id)
		)`;

		con.query(sql, function(err, result) {
			if (err) {
				if (err.errno === 1050) {
					console.log("Table %cmails already exist! Skipping...", "color:red;");
					return;
				}
			}
			if (!err) console.log("Table %cmails created", "color:red;");
		});

		sql = `CREATE TABLE storage (
			id INT NOT NULL AUTO_INCREMENT,
			path VARCHAR(500),
			path_absolute VARCHAR(500),
			PRIMARY KEY (id)
		)`;

		con.query(sql, function(err, result) {
			if (err) {
				if (err.errno === 1050) {
					console.log(
						"Table %cstorage already exist! Skipping...",
						"color:red;"
					);
					return;
				}
			}
			if (!err) console.log("Table %cstorage created", "color:red;");
		});

		insertData(con);
	});
}

async function insertData(con) {

	var defaultValuesSQL =
		"INSERT INTO personal_cv (id, file, title) VALUES (1, 'Your File Path here', 'Your title here')";
	con.query(defaultValuesSQL, function(err, result) {
		if (err) throw err;
		console.log("Added default values into personal_cv");
	});


	defaultValuesSQL = "INSERT INTO personal_information (id, description, profile_image, location) VALUES (1, 'Your Description here', 'Your image profile', 'Your location here')";
	con.query(defaultValuesSQL, function(err, result) {
		if (err) throw err;
		console.log("Added default values into personal_cv");
	});

}


var con = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	con.query(`CREATE DATABASE ${process.env.DB_NAME}`, function(err, result) {
		if (err) {
			if (err.errno === 1007) {
				console.log("Database already exists");
				console.log("Skipping.. Starting to create tabels..");
				CreateTabels();
				return;
			}
		}

		console.log("Starting to create tabels..");
		CreateTabels();
	});
});

