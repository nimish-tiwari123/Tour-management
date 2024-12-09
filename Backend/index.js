const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");


require("dotenv").config();
require("./connection");

const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/products", productRouter);


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
