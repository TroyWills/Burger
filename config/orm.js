const connection = require("./connection.js");

// create ORM object to store methods
const orm = {
    // selectAll() burgers from the MYSQL database 
    selectAll : function(table, cb) {
        connection.query("SELECT * FROM burger", [table], function(err, result) {
            if (err) throw err; 
            cb(result);
        });
    },

    // insertOne() burger into the MYSQL database
    // INSERT INTO burger (burger_name, devoured) VALUES 
    insertOne: function(table, col, val, callBack) {
        var queryString = "INSERT INTO " + table + "(" + col + ") VALUES (?)";
        console.log(queryString);
        connection.query(queryString, [val], function(err, result) {
            if(err) throw err;
            callBack(result);
        });
    }
    // updateOne() burger from devoured "0" to devoured "1"
}

   

module.exports = orm;
