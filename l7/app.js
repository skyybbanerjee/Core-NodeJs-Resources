const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  //res.setHeader("Content-Type", "application/json");
  res.end("Hello, I am coming from web-server!");
});

server.listen(8001, (err, res) => {
  if (err) throw err;
  console.log("Server is running on port 8001...");
});
``