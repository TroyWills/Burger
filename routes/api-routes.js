var db = require("../models")
// console.log(db.Burger);

module.exports = function(router) {
    router.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(burger) {
        // console.log(burger);
     res.render("home", {burger : burger});
    })
    .catch(function(err){
        console.log(err)
    })
    ;
  });

  router.post("/",function(req,res){
    //   console.log(req.body);
      db.Burger.create(req.body)
      .then(result => res.json(result))
  })
}