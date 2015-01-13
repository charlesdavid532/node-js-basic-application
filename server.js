var http = require("http"),
	url = require("url"),
	mysql = require("mysql");

function start(route,handle) {

var connection = mysql.createConnection({
   user: "root",
   password: "",
  database: "test"
});

http.createServer(function (request, response) {

    connection.query("INSERT INTO table1 (id,fname) values (8,'kbb');");
	console.log('row inserted');
    connection.query('SELECT * FROM table1;', function (error, rows, fields) {

        response.writeHead(200, {
            "Content-Type": "text/plain",
            'Access-Control-Allow-Origin' : '*'
        });
        response.write(JSON.stringify(rows));
        response.end();

  });

}).listen(8887);

console.log('Server has started');
}

exports.start = start;