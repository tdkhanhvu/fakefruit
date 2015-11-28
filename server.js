var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    data = require('./data.js'),
    list = data.list,
    attributeGroups = data.attributeGroups,
    flags = data.flags;

function getContentType(extension) {
    switch (extension) {
        case '.js':
            return 'text/javascript';
        case '.css':
            return 'text/css';
        case '.html':
            return 'text/html';
    }

    return 'text/plain';
}

function getAllFruit(response) {
    var fruits = [];

    list.forEach(function (item) {
        fruits.push({'id': item['id'], 'name': item['name'], 'icon': item['icon']});
    });

    response.end(JSON.stringify(fruits), 'utf-8');
}

function getAttributeGroups(response) {
    response.end(JSON.stringify(attributeGroups), 'utf-8');
}

function searchFruit(pathname, response) {
    var tokens = pathname.split("/"),
        fruitId = tokens[tokens.length - 1],
        result = [];

    console.log('searchId:' + fruitId);

    list.forEach(function (fruit) {
        if (fruit['id'] == fruitId)
            fruit.types.forEach(function (type) {
                result.push({'id': type['id'], 'name': type['name'], 'icon': type['icon']});
            });
    });

    response.end(JSON.stringify(result), 'utf-8');
}

function searchType(pathname, response) {
    var tokens = pathname.split("/"),
        fruitId = tokens[tokens.length - 2],
        typeId = tokens[tokens.length - 1],
        result = {};
    console.log('fruitId:' + fruitId);
    console.log('typeId:' + typeId);

    list.forEach(function (fruit) {
        if (fruit['id'] == fruitId)
            fruit.types.forEach(function (type) {
                if (type['id'] == typeId) {
                    console.log('find type:' + type);

                    type.origins.forEach(function (origin) {
                        if (flags.hasOwnProperty(origin['id']))
                            origin['flag'] = flags[origin['id']];
                        else
                            origin['flag'] = flags['other'];
                    });
                    result = type;
                }
            });
    });
    response.end(JSON.stringify(result), 'utf-8');
}

function getStaticFile(filePath, contentType, response) {
    if ((filePath.substring(0, 6) == './quiz' || filePath.substring(0, 6) == './main'
        || filePath.substring(0, 9) == './mission' || filePath.substring(0, 9) == './contact')
        && (filePath != './mission.html' && filePath != './main.html' && filePath != './quiz.html'
        && filePath != './contact.html')) {
        filePath = './index.html';
        contentType = 'text/html';
    }
    //console.log('get file:' + filePath);
    //console.log('contentType:' + contentType);

    fs.exists(filePath, function (exists) {
        if (exists) {
            fs.readFile(filePath, function (error, content) {
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

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname,
            filePath = '.' + request.url,
            tokens = filePath.split('/'),
            action = tokens[1];
        //console.log('agent:' + request.headers['user-agent']);

        if (filePath == './')
            filePath = './index.html';

        var contentType = getContentType(path.extname(filePath));

        console.log('filePath:' + filePath);
        response.writeHead(200, { 'Content-Type': contentType});

        switch (action) {
            case 'getAllFruits':
                getAllFruit(response);
                break;
            case 'getAttributeGroups':
                getAttributeGroups(response);
                break;
            case 'searchFruit':
                searchFruit(url.parse(request.url, true).pathname, response);
                break;
            case 'searchType':
                searchType(url.parse(request.url, true).pathname, response);
                break;
            default:
                getStaticFile(filePath, contentType, response);
                break;
        }
    }

    http.createServer(onRequest).listen(80);
    console.log("Server has started.");
}

start();