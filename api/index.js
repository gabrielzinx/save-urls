const http = require("http");
const path = require("path");
const URL = require("url");
const fs = require("fs");
const port = 3000;

const data = require("./urls.json");

function writeFile(file, callback) {
    fs.writeFile(
        path.join(__dirname, file),
        JSON.stringify(data, null, 4),
        err => {
            if (err) throw err;
            callback();
        }
    );
};

const server = http.createServer((req, res) => {
    
    const { name, url, del } = URL.parse(req.url, true).query;
    
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    });

    if (!name || !url) {
        return res.end(JSON.stringify(data));
    };

    if (del) {
        data.urls = data.urls.filter(item => String(item.url) !== String(url));
        return writeFile("urls.json", () => {res.end("deleted!")})
    };

    data.urls.push({name, url});
    return writeFile("urls.json", () => {res.end("ok")});
});

server.listen(port, console.log("api is running!"));