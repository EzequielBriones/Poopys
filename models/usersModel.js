const pool = require("../database");
const md5 = require("md5");

getUserByUserAndPass = async (user, pass) => {
  try {
    const query = "SELECT * FROM users WHERE user_name = ? AND user_pass = ?";
    const row = await pool.query(query, [user, md5(pass)]);
    return row[0];
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getUserByUserAndPass };
