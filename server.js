const http = require("http");
const path = require("path");
const api = require("./api/index.js");
const fs = require("fs");
const port = 5000;

const server = http.createServer((req, res) => {
    const file = req.url === "/" ? "index.html" : req.url;
    const filePath = path.join(__dirname, "public", file);
    const extname = path.extname(filePath);

    const allowedFileTypes = ['.html', '.css', '.js'];
    const allowed = allowedFileTypes.find(item => item == extname);

    if(!allowed) return;

    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

server.listen(port, console.log(`server is running!`));