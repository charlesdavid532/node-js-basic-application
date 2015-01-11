var exec = require("child_process").exec;


function start(response) {
	console.log('Request handler for start called');
	var content = "empty";
	exec("ls -lah",function(error,stdout,stderr) {
		response.writeHead(200,{"Content-type":"text/plain"});
		response.write(stdout);
		console.log("stdout is" + stdout);
		response.write("Hello start");
		response.end();
	});
}

function upload(response) {
	console.log('Request handler for upload called');
	response.writeHead(200,{"Content-type":"text/plain"});
	response.write("Hello upload");
	response.end();
}

exports.start = start;
exports.upload = upload;