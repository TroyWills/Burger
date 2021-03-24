const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// Display all burgers on the page 
router.get("/", function (req, res) {
    burger.selectAll(function(data){
        var handlebarsObject = {burgers: data};
        res.render("index", handlebarsObject);
    })
});

// Post new burger to database
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

// UPDATE burger from devoured = false(0) to devoured = true(1)
  router.put("/", function(req, res){
    burger.updateOne(req.body.burger_id, function(){
        res.redirect("/");
    });
});

module.exports = router;