const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const postsRoute = require("./routes/posts");
const bodyParser = require("body-parser");

const app = express();

(async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error(err);
  }
})();

//* Using body-parser for being able to read json data in the express server
app.use(bodyParser.json());

//* For modular code we can use router with middlewares
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("In home");
});

//Listening
app.listen(3000);
