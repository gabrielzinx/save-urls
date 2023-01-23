const http = require("http");
const path = require("path");
const fs = require("fs");
const port = 5000;

const server = http.createServer((req, res) => {
    res.end("Hello, World!");
});

server.listen(port, console.log(`server is running!`));
