var http = require("http");

function start() {
http.createServer(function(request,response) {
console.log('request received');
response.writeHead(200,{"Content-type":"text/plain"});
response.write("hello world");
response.end();
}).listen(8887);

console.log('Server has started');
}

exports.start = start;