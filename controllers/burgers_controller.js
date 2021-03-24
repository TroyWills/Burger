const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function(data){
        var handlebarsObject = {burgers: data};
        res.render("index", handlebarsObject);
    })
});

module.exports = router;