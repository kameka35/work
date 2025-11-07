const express = require("express");
const db = require("./connection");

const app = express();

app.use(express.json());  

app.listen(5000, (n) => {
  console.log("Server running on http://localhost:5000");
});





app.get("/book", (req, res) => {
  db.query("SELECT * FROM books", (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
});



app.get("/book/:id", (req, res) => {
  db.query(
    "SELECT * FROM books WHERE id = " + req.params.id,
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});



app.post("/book", (req, res) => {
  const { names, author, published_date } = req.body;
  const sql = `INSERT INTO books (names, author, published_date)
               VALUES ('${names}', '${author}', '${published_date}')`;

  db.query(sql, (err, result) => {
    if (err) console.log(err);
    res.send({ message: "Book added successfully", data: result.affectedRows });
  });
});



app.delete("/book/:id", (req, res) => {
  db.query(
    "DELETE FROM books WHERE id = " + req.params.id,
    (err, result) => {
      if (err) console.log(err);
      res.send({ message: "Book deleted successfully", data: result });
    }
  );
});



app.put("/book/:id", (req, res) => {
  const { names, author, published_date } = req.body;

  const sql = `UPDATE books 
               SET names='${names}', author='${author}', published_date='${published_date}'
               WHERE id = ${req.params.id}`;

  db.query(sql, (error, result) => {
    if (error) console.log(error);
    res.send({ message: "Book updated successfully", data: result });
  });
});

