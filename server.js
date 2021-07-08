var http = require('http')

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.write('Hello Node.js');
	response.end();
}).listen(80);

console.log('Http Server has started. 80 port.');
