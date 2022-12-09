const { Sequelize } = require("sequelize");
const dbConfig = require("../utils_config/db");

let { db_name, db_user, db_pass, db_host, db_port, db_dialect } = dbConfig;

const sequelizeInstance = new Sequelize(db_name, db_user, db_pass, {
  host: db_host,
  port: db_port,
  dialect: db_dialect,
});

module.exports = sequelizeInstance;
