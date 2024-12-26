const http = require("http");
const path = require("path");
const fs = require("fs");

const port = 8001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const dirPath = path.join(__dirname, "index.html");
  //const htmlContent = fs.readFileSync(__dirname + "/index.html");
  const htmlContent = fs.readFileSync(dirPath);
  res.end(htmlContent);
});

server.listen(port, (err, res) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}...`);
});
