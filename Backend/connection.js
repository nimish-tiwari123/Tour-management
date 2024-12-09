const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONNECTION;
console.log(mongo_url);
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Mongo DB Connected..");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:_ ", err);
  });
