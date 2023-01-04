const path = require("path")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

 dotenv.config({ path:path.join(__dirname, "../../config.env")});



const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("Connection successful"))



app.listen(8000, () => {
  console.log("Listening for requests")
});