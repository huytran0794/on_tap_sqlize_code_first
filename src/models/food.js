const { DataTypes, Model } = require("sequelize");
const sequelizeInstance = require("./db_connect");
const Food_Type = require("./food_type");

class Food extends Model {}

Food.init(
  {
    food_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    food_name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    desc: {
      type: DataTypes.STRING,
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "Food",
    tableName: "food",
    timestamps: false,
  }
);

// define model relationship
Food_Type.hasMany(Food, { foreignKey: "type_id" });
Food.belongsTo(Food_Type, { foreignKey: "type_id" });

module.exports = Food;
