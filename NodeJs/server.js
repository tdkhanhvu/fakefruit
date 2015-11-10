var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path =  require('path'),
	index,
	config = '';
    fs.readFile('./index.html', function (err, data) {
		if (err) {
			throw err;
		}
		index = data;
	}),
    list = require('./data.js').list,
    attributes = [
        {
            'id': 'see',
            'name': 'Nhìn',
            'attributes': [{
                'id': 'photo',
                'name': 'Hình'
            },{
                'id': 'color',
                'name': 'Màu'
            },{
                'id': 'shape',
                'name': 'Dạng'
            },{
                'id': 'size',
                'name': 'Cỡ'
            }
            ]},
        {
            'id': 'touch',
            'name': 'Chạm',
            'attributes': [{
                'id': 'vo',
                'name': 'Vỏ'
            }]},
        {
            'id': 'smelltaste',
            'name': 'Mùi vị',
            'attributes': [{
                'id': 'smell',
                'name': 'Mùi'
            },{
                'id': 'taste',
                'name': 'Vị'
            },{
                'id': 'ruot',
                'name': 'Ruột'
            }]},
        {
            'id': 'Others',
            'name': 'Khác',
            'attributes': [{
                'id':'season',
                'name': 'Mùa'
            },{
                'id': 'weight',
                'name': 'Nặng'
            },{
                'id': 'price',
                'name': 'Giá'
            },{
                'id': 'time',
                'name': 'Bảo quản'
            }]

    }];

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
			result.push({'id':item['id'], 'name':item['name'], 'icon':item['icon']});
		});

		response.end(JSON.stringify(result), 'utf-8');
	} else if (filePath.indexOf('searchFruit') > -1) {
		var tokens = url.parse(request.url,true).pathname.split("/"),
            fruitId = tokens[tokens.length - 1],
            result = [];
        console.log('searchId:' + fruitId);

		list.forEach(function (fruit) {
            if (fruit['id'] == fruitId)
                fruit.types.forEach(function(type){
                    result.push({'id':type['id'], 'name':type['name'], 'icon':type['icon']});
                });
		});
		response.end(JSON.stringify(result), 'utf-8');
	} else if (filePath.indexOf('searchType') > -1) {
        var tokens = url.parse(request.url,true).pathname.split("/"),
            fruitId = tokens[tokens.length - 2],
            typeId = tokens[tokens.length - 1],
            result = {};
        console.log('fruitId:' + fruitId);
        console.log('typeId:' + typeId);

        list.forEach(function (fruit) {
            if (fruit['id'] == fruitId)
                fruit.types.forEach(function(type){
                    if (type['id'] == typeId) {
                        console.log('find type:' + type);
                        result = type;
                    }
                });
        });
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