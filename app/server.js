
var http = require("http");



var zmq = require("zeromq"),
  sock = zmq.socket("push");

sock.bindSync("tcp://*:3000");
console.log("Producer bound to port 3000");

setInterval(function() {
  console.log("sending work");
  sock.send("some work");
}, 500);


http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
