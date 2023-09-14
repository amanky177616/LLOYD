const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hello World");
});

const port = 5555;

server.listen(port, () => {
  console.log("Server listening at port 5555");
});