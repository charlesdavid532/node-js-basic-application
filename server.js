var http = require("http"),
	url = require("url");

function start(route,handle) {
http.createServer(function(request,response) {
	var pathname = url.parse(request.url).pathname;
		
	console.log("pathname is" + pathname);
	console.log('request received');

	
	
	route(handle,pathname,response,request);
	
}).listen(8887);

console.log('Server has started');
}

exports.start = start;