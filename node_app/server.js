const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{ "success": true }');
});

const port = process.env.PORT || 8080;
server.listen(port, () => console.log("Server listening at port 8080"));
