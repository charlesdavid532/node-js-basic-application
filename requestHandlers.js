var exec = require("child_process").exec,
	querystring = require("querystring");


function start(response) {
	console.log('Request handler for start called');
	/*
	var content = "empty";
	exec("ls -lah",function(error,stdout,stderr) {
		response.writeHead(200,{"Content-type":"text/plain"});
		response.write(stdout);
		console.log("stdout is" + stdout);
		response.write("Hello start");
		response.end();
	});
	*/
	var body = '<html>'+
				'<head>'+
				'<meta http-equiv="Content-Type" content="text/html; '+
				'charset=UTF-8" />'+
				'</head>'+
				'<body>'+
				'<form action="/upload" method="post">'+
				'<textarea name="text" rows="20" cols="60"></textarea>'+
				'<input type="submit" value="Submit text" />'+
				'</form>'+
				'</body>'+
				'</html>';
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(body);
	response.end();

}

function upload(response,postData) {
	console.log('Request handler for upload called');
	response.writeHead(200,{"Content-type":"text/plain"});
	response.write("You had sent:" +querystring.parse(postData).text);
	response.end();
}

exports.start = start;
exports.upload = upload;