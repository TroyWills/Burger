const mysql = require("mysql");

const connectionString = process.env.JAWSDB_URL || {
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger"
}

const connection = mysql.createConnection(connectionString);

connection.connect();

module.exports = connection;
