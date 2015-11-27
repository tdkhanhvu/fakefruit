var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path =  require('path');

function start() {
  function onRequest(request, response) {
	console.log('url:' + request.url);
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    console.log('request starting...');
	
	var filePath = '.' + pathname;
	if (filePath == './')
		filePath = './index.html';
		
	var extname = path.extname(filePath);
	var contentType = 'text/plain';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.html':
			contentType = 'text/html';
			break;
	}
	console.log(filePath);
	response.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*'});


	if ((filePath.substring(0,6) == './quiz' || filePath.substring(0,6)  == './main' 
		 || filePath.substring(0,9)  == './mission' || filePath.substring(0,9)  == './contact')
		 && (filePath != './mission.html' && filePath != './main.html' && filePath != './quiz.html'
			&& filePath != './contact.html')){
		 filePath = './index.html';
		 contentType = 'text/html';
	}
	console.log('get file:' + filePath);
	console.log('contentType:' + contentType);
	
	fs.exists(filePath, function(exists) {
		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				}
				else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
			});
		}
		else {
			response.writeHead(404);
			response.end();
		}
	});
  }

  http.createServer(onRequest).listen(80);
  console.log("Server has started.");
}


start();