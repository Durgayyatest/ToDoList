const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vijay@123',  // Replace with your actual password
  database: 'todo1'
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Database connected successfully");
});

// GET all items
app.get('/items', (req, res) => {
  db.query('SELECT * FROM todoItems', (err, results) => {
    if (err) {
      console.error("Error fetching items:", err);
      return res.status(500).send("Error fetching items");
    }
    res.json(results);
  });
});

// POST: Add new item
app.post('/add-item', (req, res) => {
  const { itemDescription } = req.body;
  if (!itemDescription) return res.status(400).send("itemDescription is required");

  db.query('INSERT INTO todoItems (itemDescription) VALUES (?)', [itemDescription], (err, result) => {
    if (err) {
      console.error("Error inserting item:", err);
      return res.status(500).send("Error inserting item");
    }
    res.send("Item added successfully");
  });
});

// DELETE: Remove item by ID
app.delete('/item/:id', (req, res) => {
  const id = req.params.id;
  console.log("Deleting item with ID:", id);
  db.query('DELETE FROM todoItems WHERE ID = ?', [id], (err, result) => {
    if (err) {
      console.error("Error deleting item:", err);
      return res.status(500).send("Error deleting item");
    }
    res.send("Item deleted successfully");
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
