const express = require("express");
const app = express();
const port = 3000; 

app.get("/", (req, res) => {
    res.send('Our express server is up and running');
});

app.get('/test', (req, res) => {
    res.send("running at /test");
});

app.listen(port, () => {
    console.log(`Our server is up and running on port: ${port}`);
}); 