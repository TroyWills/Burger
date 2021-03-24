const orm = require("../config/orm.js");

var burger = {
    // select all burgers in database
    selectAll: function(cb) {
        orm.selectAll("burger", function(result) {
            cb(result);
        })
    },
    insertOne: function(objColVals, condition, cb) {
        orm.insertOne("burger", objColVals, condition, function(res) {
            cb(res);
        });
    }
}
 // Also inside `burger.js`, create the code that will call 
 // the ORM functions using burger specific input for the ORM.

module.exports = burger;