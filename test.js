const http = require("http");

const server = http.createServer(function(req, res) {
    const url = req.url;

    if (url === "/") {
        // do a 200 response
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><body><div style='width:100%; background-color:blue; color:#fff;'>Hello World!</div><button onclick='alertview();'>test</button></body><script>function alertview(){alert(\"HELLO WORLD!\");}</script></html>");
        res.end();
    }
    if (url === "/close") {
        process.send("STOP");
    }
});

server.listen(3000, function() {
    console.log("server started at port http://127.0.0.1:3000");
});

process.on("STOP", function() {
    console.log("Exiting NodeJS server");
    server.close();
})