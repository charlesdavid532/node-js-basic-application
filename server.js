var http = require("http"),
	url = require("url");

function start(route) {
http.createServer(function(request,response) {
var pathname = url.parse(request.url).pathname;
console.log("pathname is" + pathname);
console.log('request received');
route(pathname);
response.writeHead(200,{"Content-type":"text/plain"});
response.write("hello world");
response.end();
}).listen(8887);

console.log('Server has started');
}

exports.start = start;