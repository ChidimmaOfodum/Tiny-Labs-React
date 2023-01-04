const express = require("express")
const fs = require("fs")
const router = express.Router();

let data = fs.readFileSync(`${__dirname}/data.json`);
data = JSON.parse(data);

//Routes

const getUsers = (req, res) => {
  res.send(data);
};

const createUser = (req, res) => {
  data.push(req.body);
  fs.writeFile(`${__dirname}/data.json`, JSON.stringify(data), (err) => {
    res.status(201).json({
      status: "success",
      data,
    });
  });
};

router.route("/").get(getUsers).post(createUser);

module.exports = router
