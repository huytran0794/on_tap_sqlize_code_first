const { DataTypes, Model } = require("sequelize");
const sequelizeInstance = require("./db_connect");

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Email không đúng",
        },
      },
    },
    passWord: {
      field: "pass_word",
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "User",
    tableName: "user",
    timestamps: false,
  }
);

module.exports = User;
