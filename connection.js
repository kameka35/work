const mysql = require("mysql2");

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library",
});

// connect
db.connect((err) => {
  if (err) {
    console.log("Database connection failed!", err);
  } else {
    console.log("Database connected successfully!");
  }
});

module.exports = db;
