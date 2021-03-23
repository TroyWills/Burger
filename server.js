var express = require("express");
var exphbs = require("express-handlebars");
// const router = express.Router();

var app = express();
var PORT = process.env.PORT || 8080;

// var db = require("./models")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.static("public"));
app.use(express.static("views/images"));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');   

var apiRoutes = require("./controllers/burgers_controller.js");
app.use(apiRoutes);

app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
  });