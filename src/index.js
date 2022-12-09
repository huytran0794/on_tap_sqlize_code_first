/* express */
const express = require("express");
const app = express();

/* setup environment files */

require("dotenv").config();
/* port to listen to */
const APP_PORT = 8080;

/* middleware để khi data từ fe chuyền về backend, express sẽ chuyển sang json luôn. */
app.use(express.json());
// app.use(express.static("."));
/* allow cors to be used */
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

/* app listening to port */
app.listen(APP_PORT);

/* kiem tra moi truong hien tai la moi truong gi */

/* cach viet api, 1st params: path, 2nd params: request va response */
const { rootRoute } = require("./routes");

app.use("/api", rootRoute);

/* kiem tra thong tin db tu file env duoc dua qua file config  */
const config = require("./config/db");
console.log("config");
console.log(config);
