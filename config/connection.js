var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burger"
// });

const connectionString = process.env.JAWSDB_URL || {
  host: "pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "cxrz336zg2x6nfb2",
  password: "ofbclzozwxpios27",
  database: "h3ohs6fl8slkfor5",
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
