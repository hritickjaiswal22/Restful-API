const express = require("express");

const app = express();

//* Middlewares
app.use("/posts", () => {
  console.log(
    "When /posts route is hit, this callback function is executed first"
  );
});

app.get("/", (req, res) => {
  res.send("In home");
});

app.get("/posts", (req, res) => {
  res.send("GET posts");
});

//Listening
app.listen(3000);
