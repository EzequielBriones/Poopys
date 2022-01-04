const pool = require("../database");

getDogs = async () => {
  try {
    const query = "SELECT * FROM perros";
    const rows = await pool.query(query);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

addDog = async (data) => {
  try {
    const query = "INSERT INTO perros SET ?";
    const rows = await pool.query(query, [data]);
    return rows;
  } catch (error) {
    throw error;
  }
};

getDog = async (id) => {
  try {
    const query = "SELECT * FROM perros WHERE id = ?";
    const rows = await pool.query(query, [id]);
    return rows;
  } catch (error) {
    throw error;
  }
};

deleteDog = async (id) => {
  const query = "DELETE FROM perros WHERE id = ?";
  const row = await pool.query(query, [id]);
  return row;
};

changeDog = async (data, id) => {
  const query = "UPDATE perros SET ? WHERE id = ?";
  const row = await pool.query(query, [data, id]);
  return row;
};
module.exports = { getDogs, addDog, getDog, deleteDog, changeDog };
