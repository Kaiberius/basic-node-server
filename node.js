const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 1616;

const server = http.createServer((req, res => {
    if (req.url === "/") {
        const html = fs.readFileSync(path.join(__dirname, "index.html"));
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        res.end(html)
    } else {
        res.statusCode
    }
}))