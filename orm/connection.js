// This file is not currently connected to any part of the application -- saving in-case needed

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize('burger', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;