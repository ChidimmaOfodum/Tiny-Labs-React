const express = require("express");
const path = require("path")
const cors = require("cors")
// const userRouter = require("./userRoute")

const app = express()
const another = path.join(__dirname, "../build");

//MIDDLE WARES

app.use(express.json())
app.use(cors())
app.use(express.static(another));

app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/users", (req, res) => {
  res.send("Done");
});

// app.get("*", (req, res) => {
//     res.sendFile(another + "/index.html")
// })


// app.use("/users", userRouter)


module.exports = app