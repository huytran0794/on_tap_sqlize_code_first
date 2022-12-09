/* handle all logical inside this file */

/* import msg handler */
const { successCode, failCode, errorCode } = require("../config/response");

/* import model */
const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    let data = await User.findAll();
    res.send(data);
    successCode(res, "Get all user infos successfully!");
  } catch (error) {
    errorCode(res);
  }
};

/* create user */
const createUser = async (req, res) => {
  try {
    let { full_name, email, passWord } = req.body;
    // check if email already exist
    let checkEmailObj = await User.findOne({
      where: { email },
    });

    if (checkEmailObj) {
      return failCode(res, "Email đã tồn tại");
    }
    let result = await User.create({ full_name, email, passWord });
    res.send(result);
  } catch (error) {
    errorCode(res, error.errors[0].message);
  }
};

/* update user */
const updateUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let { full_name, email, passWord } = req.body;
    // check if email already exist
    let checkUserObj = await User.findOne({
      where: { user_id },
    });

    if (checkUserObj) {
      let result = await User.update(
        {
          full_name,
          email,
          passWord,
        },
        {
          where: { user_id },
        }
      );
      successCode(`Update thành công`);
    } else {
      return failCode(res, "User id không tồn tại");
    }
  } catch (error) {
    errorCode(res, error.errors[0].message);
  }
};

// common js module
module.exports = { getUser, createUser, updateUser };
