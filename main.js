const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "195.35.7.235",
	user: "saja2",
	password: "6969ismyLIFE@",
	database: "saja",
});

connection.connect((err) => {
	if (err) {
		console.error("Error connecting to database: " + err.stack);
		return;
	}

	console.log("Connected to database as id " + connection.threadId);
});
