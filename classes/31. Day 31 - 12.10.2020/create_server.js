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
  
  // Setup various page contents based on url requested or contained
  if(res.url === "/cat") {
    res.end(
      `<h1>Cat Route</h1><a href="/dog">Dog</a>`
    );
  } else if (res.url === "/dog") {
    res.end(
      `<h1>Dog Route</h1><a href="/cat">Cat</a>`
    )
  }
  
})

// Send server request
server.listen(hostName, port, function() {
  console.log(`Server running at http://${hostName}:${port}/`);
})
