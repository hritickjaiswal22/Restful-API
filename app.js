const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/testAPI";

const app = express();

(async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${url}`);
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
