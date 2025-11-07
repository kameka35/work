<<<<<<< HEAD
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
=======
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
>>>>>>> 2ad26f48aab429da9c70a5482b769f38f4fd5d01
