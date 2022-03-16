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
  database: "bank_manager",
});

app.post("/newUser", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  const dateOfBirth = req.body.dateOfBirth;
  const gender = req.body.gender;
  const contactNo = req.body.contactNo;
  const nic = req.body.nic;

  db.query(
    "INSERT INTO person (firstName, lastName, address, dateOfBirth, gender, contactNo, nic) VALUES (?,?,?,?,?,?,?)",
    [firstName, lastName, address, dateOfBirth, gender, contactNo, nic],
    (res, err) => {
      console.log(err);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server up & running on port ${PORT}`);
});
