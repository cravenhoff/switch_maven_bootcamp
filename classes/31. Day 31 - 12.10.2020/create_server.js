/* Creating a Local Server With Node.js */
// Import the "http" object
const http = require("http");

// Create constants for hostname and port
const hostName = "127.0.01";
const port = 3120;

// Create server
const server = http.createServer(function(res, req) {
  console.log("Our server was a hit!");
  console.log(res.url);  // console.log(`Here's our URL: ${res.url}`);
  
  // Set status code and header
  res.statusCode = 200;
  res.setHeader = ("Content-Type", "text/html");
  
})
