var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path =  require('path'),
	index,
	config = '',
	searchSymbolsByName= '',
	getMarks = '',
	//list = [{'id':'cam'}, {'id':'nho'} ];
	list = [{'id':'cam'},{'id':'nho','origins':[{'id':'phanrang', 'name':'Phan Rang', 'image':'nho_ninhthuan.png','description':'nho Phan Rang thường quả nhỏ, có màu đỏ hoặc tím nhạt, quả mọng, sờ vào quả thấy chắc và cứng. Cuốn rất tươi, chùm ngắn. Vị chua đậm'}, {'id':'trungquoc', 'name':'Trung Quốc', 'image':'nho_trungquoc.png','description':'quả tròn, to, thường đựng trong thùng lạnh. Quả có màu tím nhạt, có lớp phấn trắng đục. Ruột có nhiều hạt, mềm. Vị hơi chua.'}]},{'id':'dau'}];

	fs.readFile('./index.html', function (err, data) {
		if (err) {
			throw err;
		}
		index = data;
	});

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    console.log('request starting...');
	
	var filePath = '.' + request.url;
	if (filePath == './')
		filePath = './index.htm';
		
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
	if (filePath.indexOf('getAllFruits') > -1) {
		var result = [];
		
		list.forEach(function (item) {
			result.push({'id':item['id']});
		});
		//String acrHeaders = request.getHeader("Access-Control-Request-Headers");
		//String acrMethod = request.getHeader("Access-Control-Request-Method");

		//response.setHeader("Access-Control-Allow-Headers", acrHeaders);
		//response.setHeader("Access-Control-Allow-Methods", acrMethod);

		response.end(JSON.stringify(result), 'utf-8');
	} else if (filePath.indexOf('search') > -1) {
		//var result= {},
		//	fruitId = ;
		
		//list.forEach(function (item) {
		//	result.push({'id':item['id']});
		//});
		
		var query = url.parse(request.url,true).query;
		
		var result = [];
		
		list.forEach(function (item) {
			result.push({'id':item['id']});
		});
		response.writeHead(200, { 'Content-Type': contentType });
		response.end(JSON.stringify(result), 'utf-8');
	} 
	
	else {
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
  }

  http.createServer(onRequest).listen(8080);
  console.log("Server has started.");
}

exports.start = start;