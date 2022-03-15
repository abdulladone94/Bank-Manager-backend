const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abdulla43005",
  database: "hobbies_collection",
});

app.listen(PORT, () => {
  console.log(`Server up & running on port ${PORT}`);
});
