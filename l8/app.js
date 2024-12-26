const http = require("http");

const port = 8002;

const server = http.createServer((req, res) => {
  console.log(req.url);

  // Home route
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home");
    return;
  }

  // API Users route
  if (req.url === "/api/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const users = [
      { id: 1, name: "John Doe", email: "john@doe.com", age: 44 },
      { id: 2, name: "Skyy Banerjee", email: "skyy@banerjee.com", age: 29 },
    ];
    res.end(JSON.stringify(users));
    return;
  }

  // Login route
  if (req.url === "/login") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Login successful");
    return;
  }

  // Register route
  if (req.url === "/register") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Registration successful :)");
    return;
  }

  // About route
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About");
    return;
  }

  // Contact route
  if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact");
    return;
  }

  // Handling form-data, POST method
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString(); // Convert BUFFER to string
    });

    req.on("end", () => {
      try {
        const parsedData = JSON.parse(body); // Parse JSON
        console.log("POST DATA:", parsedData);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            message: "Form submitted successfully!",
            data: parsedData,
          })
        );
      } catch (err) {
        console.error("Invalid JSON:", err.message);

        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            message: "Invalid JSON format.",
            error: err.message,
          })
        );
      }
    });
    return;
  }

  // Default route for unknown paths
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>Page Not Found :(</h1>");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
