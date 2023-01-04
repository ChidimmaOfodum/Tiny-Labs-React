const express = require("express")
const fs = require("fs");
const  path  = require("path");
const router = express.Router();


let data = fs.readFileSync(`${__dirname}/data.json`);
data = JSON.parse(data);

//Routes

// const getUsers = (req, res) => {
//   res.send("DONE")
// };

// const createUser = (req, res) => {
//   data.push(req.body);
//   fs.writeFile(`${__dirname}/data.json`, JSON.stringify(data), (err) => {
//     res.status(201).json({
//       status: "success",
//       data,
//     });
//   });
// };

// router.route("/").get(getUsers).post(createUser);


router.route("/").get((req, res) => {
  res.sendFile("/index.html")
})

module.exports = router
