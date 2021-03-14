// Dependencies 
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send('Our express server is up and running');
});

app.get('/test', (req, res) => {
    res.send("running at /test");
});

app.listen(PORT, () => {
    console.log(`Our server is up and running on port: ${PORT}`);
});