const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const postsRoute = require("./routes/posts");

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

//* For modular code we can use router with middlewares
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("In home");
});

//Listening
app.listen(3000);
