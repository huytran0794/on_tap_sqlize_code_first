/* define route for each model */
const express = require("express");
const {
  getUser,
  createUser,
  updateUser,
} = require("../controllers/userController");
const userRoute = express();

userRoute.get("/getUser", getUser);
userRoute.post("/createUser", createUser);
userRoute.put("/updateUser/:user_id", updateUser);

module.exports = userRoute;
