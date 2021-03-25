const orm = require("../config/orm.js");

var burger = {
    
    // select all burgers in database
    selectAll: function(cb) {
        orm.selectAll("burger", function(result) {
            cb(result);
        })
    },

    // Insert new burger into database
    insertOne: function(objColVals, condition, cb) {
        orm.insertOne("burger", objColVals, condition, function(res) {
            cb(res);
        });
    },

    // Updated devoured from false to true in database -- work in progress 
    updateOne: function(burgerID, cb) {
        orm.updateOne("burger", "devoured", 1, burgerID, function(res) {
            cb(res);
        });
    }
}
module.exports = burger;