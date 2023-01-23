const http = require("http");
const path = require("path");
const URL = require("url");
const fs = require("fs");
const port = 3000;

const data = require("./urls.json");

const server = http.createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query;
    
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    });

    return res.end(JSON.stringify(data));
});

server.listen(port, console.log("api is running!"));