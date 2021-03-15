var db = require("../models");
const burger = require("../models/burger");

module.exports = function(app) {

    app.get("/", (req, res) => {
        res.send('Our express server is up and running');
    });

}