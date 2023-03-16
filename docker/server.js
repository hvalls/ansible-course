const http = require("http");

process.on('SIGINT', function() {
    process.exit();
});

const server = http.createServer((req, res) => {
  res.end("Hello from the server");
});

server.listen(8080, () => console.log("server started at port 8080"));
