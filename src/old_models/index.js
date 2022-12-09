const sequelizeInstance = require("./db_connect");

try {
  sequelizeInstance.authenticate();
  console.log("run ok");
} catch (error) {
  console.log("fail to run");
}
