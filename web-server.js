var http = require('http');

var s = http.createServer(function(req, res){
	res.writeHead(200, {'content-type': 'text/plain'});
	res.end("\nI am in the server main Page.\n");
});

s.listen(8888);
