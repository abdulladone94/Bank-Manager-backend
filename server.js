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

app.get("/persons", (req, res) => {
  db.query("SELECT * FROM person", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/banks", (req, res) => {
  db.query("SELECT * FROM bank", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/bankWiseAccounts", (req, res) => {
  db.query(
    "SELECT bankusers.userId, bank.bankName, person.firstName, person.lastName, person.address, person.dateOfBirth, person.gender, person.contactNo, person.nic FROM bankusers INNER JOIN bank ON bankusers.bankId = bank.bankId INNER JOIN person ON bankusers.personId = person.personId",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
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
