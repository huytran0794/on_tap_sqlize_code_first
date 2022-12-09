/* define route for each model */
const express = require("express");
const { getFood } = require("../controllers/foodController");
const foodRoute = express();

foodRoute.get("/getFood", getFood);

module.exports = foodRoute;
