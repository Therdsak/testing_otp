require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./route/index");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json({
  limit: "50mb"
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

routes(app);

app.listen(PORT, () => {
  console.log("ready server on PORT : " + PORT);
});