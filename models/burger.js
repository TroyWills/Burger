var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

  module.exports = function(sequelize,DataTypes) {
    var Menu = sequelize.define('Menu', {
      burger_name: Sequelize.STRING,
      devoured: Sequelize.DECIMAL(10,2)
    });
    
    return Menu
  }