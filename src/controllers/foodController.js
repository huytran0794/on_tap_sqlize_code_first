/* handle all logical inside this file */

/* import msg handler */
const { successCode, failCode, errorCode } = require("../config/response");

/* import model */
const Food = require("../models/food");
const Food_Type = require("../models/food_type");

const getFood = async (req, res) => {
  try {
    let data = await Food.findAll({ include: [Food_Type] });
    res.send(data);
    successCode(res, "Get all food infos successfully!");
  } catch (error) {
    errorCode(res);
  }
};

const getFoodType = async (req, res) => {
  try {
    let data = await Food_Type.findAll();
    res.send(data);
    successCode(res, "Get all food type infos successfully!");
  } catch (error) {
    errorCode(res);
  }
};

/* create user */
// const createUser = async (req, res) => {
//   try {
//     let { full_name, email, passWord } = req.body;
//     // check if email already exist
//     let checkEmailObj = await User.findOne({
//       where: { email },
//     });

//     if (checkEmailObj) {
//       return failCode(res, "Email đã tồn tại");
//     }
//     let result = await User.create({ full_name, email, passWord });
//     res.send(result);
//   } catch (error) {
//     errorCode(res, error.errors[0].message);
//   }
// };

// /* update user */
// const updateUser = async (req, res) => {
//   try {
//     let { user_id } = req.params;
//     let { full_name, email, passWord } = req.body;
//     // check if email already exist
//     let checkUserObj = await User.findOne({
//       where: { user_id },
//     });

//     if (checkUserObj) {
//       let result = await User.update(
//         {
//           full_name,
//           email,
//           passWord,
//         },
//         {
//           where: { user_id },
//         }
//       );
//       successCode(`Update thành công`);
//     } else {
//       return failCode(res, "User id không tồn tại");
//     }
//   } catch (error) {
//     errorCode(res, error.errors[0].message);
//   }
// };

// common js module
module.exports = { getFood };
