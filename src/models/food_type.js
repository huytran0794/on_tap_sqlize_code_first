const { DataTypes, Model } = require("sequelize");
const sequelizeInstance = require("./db_connect");

class Food_Type extends Model {}

Food_Type.init(
  {
    type_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    type_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Food_Type",
    tableName: "food_type",
    timestamps: false,
  }
);

module.exports = Food_Type;
