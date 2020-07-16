const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{ "success": true }');
});

server.listen(8080, () => console.log("Server listening at port 8080"));
