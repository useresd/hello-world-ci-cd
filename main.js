const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
    res.send("hello, world");
})

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`listening on port ${port}`));