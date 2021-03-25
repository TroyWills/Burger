var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burger"
// });

const connectionString = process.env.JAWSDB_URL || {
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger",
  PORT: "3306"
}

const connection = mysql.createConnection(connectionString);

connection.connect();

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
