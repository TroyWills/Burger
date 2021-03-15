var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

  module.exports = function(sequelize,DataTypes) {
    var burger = sequelize.define('Menu', {
      burger_name: Sequelize.STRING,
      devoured: Sequelize.TINYINT,
    });
    
    return burger
  }