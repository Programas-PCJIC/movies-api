const mysql = require("mysql2/promise");
const { config } = require("../config");

const HOST = config.dbHost;
const USER = config.dbUser;
const PASSWORD = config.dbPassword;
const DB_PORT = config.dbPort;
const DB_NAME = config.dbName;

const connect = mysql.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  port: DB_PORT,
  database: DB_NAME,
});

async function getAll() {
  try {
    const [rows] = await connect.query(`SELECT * FROM movie;`);
    return rows;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function get(movieId) {
  try {
    const [result] = await connect.query(
      `SELECT * FROM movie WHERE id = '${Number(movieId)}'`
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = { getAll, get };
