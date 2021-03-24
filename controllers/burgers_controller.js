const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function(data){
        var handlebarsObject = {burgers: data};
        res.render("index", handlebarsObject);
    })
});

router.post("/", function(req, res) {
    burger.insertOne([
      "burger_name",
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

module.exports = router;