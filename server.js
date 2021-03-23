var express = require('express');
var exphbs = require('express-handlebars');
var router = express.Router();

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

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
  });