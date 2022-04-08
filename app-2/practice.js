//require module
const http = require("http");

// Save the result of the createServer() method in a variable named server.
const server = http.createServer((req, res) => {
  res.end(console.log("hello world, server is running"));
});
// Call the server's listen() method with the port number 3001.
server.listen(3001, () => {
  console.log("Server running!");
});
