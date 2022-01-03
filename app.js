const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

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

app.get("/", (req, res) => {
  res.send("In home");
});

app.get("/posts", (req, res) => {
  res.send("GET posts");
});

//Listening
app.listen(3000);
