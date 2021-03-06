var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    data = require('./data.js'),
    list = data.list,
    attributeGroups = data.attributeGroups,
    flags = data.flags,
    nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'chontraicay@gmail.com',
            pass: 'traicay123'
        }
    });
    domain = 'http://www.chontraicay.com';  // Note: to make it more dynamic

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

function getFruitById(fruitId) {
    console.log('searchId:' + fruitId);

    var result = null;
    list.forEach(function (fruit) {
        if (fruit['id'] == fruitId) {
            result = fruit;
        }
    });

    return result;
}

function getTypeById(fruitId, typeId) {
    console.log('find type:' + typeId);

    var result = null,
        fruit = getFruitById(fruitId);
    if (fruit != null)
        fruit.types.forEach(function (type) {
            if (type['id'] == typeId) {

                type.origins.forEach(function (origin) {
                    if (flags.hasOwnProperty(origin['id']))
                        origin['flag'] = flags[origin['id']];
                    else
                        origin['flag'] = flags['other'];
                });
                result = type;
            }
        });

    return result;
}

function searchFruit(pathname, response) {
    var tokens = pathname.split("/"),
        fruitId = tokens[tokens.length - 1],
        result = [],
        fruit = getFruitById(fruitId);

    if (fruit != null)
        fruit.types.forEach(function (type) {
            result.push({'id': type['id'], 'name': type['name'], 'icon': type['icon']});
        });

    response.end(JSON.stringify(result), 'utf-8');
}

function searchType(pathname, response) {
    var tokens = pathname.split("/"),
        fruitId = tokens[tokens.length - 2],
        typeId = tokens[tokens.length - 1],
        result = getTypeById(fruitId, typeId);

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
                    response.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
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

function getDataBasedOnQuery(query, prefix) {
    var image = 'main.jpg',
        title = prefix + ' cách phân biệt các loại trái cây',
        description = prefix + ' cách phân biệt các loại trái cây',
        result = {};

    if (query != null) {
        var queryList = {};

        query.split('&').forEach(function (record) {
            var tokens = record.split('=');
            queryList[tokens[0]] = tokens[1];
        });

        var item = null;
        if ('fruit' in queryList) {
            if ('type' in queryList) {
                item = getTypeById(queryList['fruit'], queryList['type']);
            } else
                item = getFruitById(queryList['fruit']);

            image = item['image'];
            title = prefix + ' cách phân biệt các loại ' + item['name'];
            if (prefix == 'Từ điển ')
                description = item['text'] + ' Bạn hãy dành vài phút cập nhật thêm kiến thức nhá!';
            else
                description = item['text'] + ' Bạn có đủ tự tin là mình phân biệt được không? Hãy dành ít phút thử tài của bạn qua các câu hỏi này nhá!'
        }
    }
    result.image = image;
    result.title = title;
    result.description = description;

    return result;
}
function handleFacebookBot(request, response) {
    var pathname = url.parse(request.url).pathname,
        html = null,
        result = {},
        urlLink = request.url;

    console.log(url.parse(request.url));

    switch(pathname) {
        case '/':
            urlLink = '';
        case '/mission':
            result = {
                'title' : 'Câu chuyện về người Việt chọn trái cây Việt',
                'description' : 'Dự án xuất phát từ sự bức xúc về việc trái cây Trung Quốc liên tục đội lốt trái cây Việt và bị tẩm hóa chất gây ảnh hưởng tới khách hàng.',
                'image' : 'main.jpg'
            };
            break;
        case '/contact':
            result = {
                'title' : 'Những con người đằng sau dự án chọn trái cây Việt',
                'description' : 'Tụi mình là những con người bình thường, và cũng chung nỗi bức xúc về trái cây Trung Quốc đội lốt trái cây Việt như bao người Việt Nam khác.',
                'image' : 'main.jpg'
            };
            break;
        case '/main':
            result = getDataBasedOnQuery(url.parse(request.url).query, 'Từ điển ');
            break;
        case '/quiz':
            result = getDataBasedOnQuery(url.parse(request.url).query, 'Đố vui ');
            break;
    }

    result['image'] = domain + '/assets/fruit/' + result['image'];

    response.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*'});

    fs.readFile('./facebook.html', 'utf-8', function (error, content) {
        if (error) {
            return console.log(error);
        } else {
            html = content.replace('[IMAGE]', result['image'])
                .replace('[TITLE]', result['title'])
                .replace('[DESCRIPTION]', result['description'])
                .replace('[URL]', domain + urlLink);

            response.end(html, 'utf-8');
        }
    });
}
function register(request, response){
    var jsonString = '';
    request.on('data', function (chunk) {
        jsonString += chunk;
    });
    request.on('end', function () {
        var json = JSON.parse(jsonString.toString()),
            toEmail = json['email'],
            name = json['name'],
            purpose = json['purpose'],
            position = json['position'],
            comment = json['comment'],
            htmlContent = '',
            subject = '';

        if (purpose == 'Tham Gia') {
            subject = 'Chào mừng bạn gia nhập Chọn Trái Cây';
            htmlContent = '<p>Chào bạn ' + name + ',</p>' +
                '<p>Cám ơn bạn đã đăng kí tham gia Chọn Trái Cây ' +
                'với vị trí ' + '<strong>' + position + '</strong>.</p>' +
                '<p>Chúng tôi cũng đã lưu ý nhận xét của bạn:</p>' +
                '<p>' + comment + '</p>' +
                '<p>Thân,</p><p>Ban Tổ Chức Chọn Trái Cây</p>';
        } else {
            subject = 'Cám ơn góp ý của bạn cho Chọn Trái Cây';
            htmlContent = '<p>Chào bạn ' + name + ',</p>' +
                '<p>Cám ơn bạn đã đóng góp ý kiến cho Chọn Trái Cây: ' +
                '<p>' + comment + '</p>' +
                '<p>' + 'Chúng tôi sẽ xem xét và cải thiện website của mình!' + '</p>' +
                '<p>Thân,</p><p>Ban Tổ Chức Chọn Trái Cây</p>';
        }

        var mailOptions = {
            from: 'Chọn Trái Cây<chontraicay@gmail.com>',
            to: toEmail,
            cc: 'quangphuc789@gmail.com,tdkhanhvu@gmail.com',
            subject: subject,
            text: 'Hello world ✔',
            html: htmlContent
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
            response.end('', 'utf-8');
        });
    });
}

function start() {
    function onRequest(request, response) {
        var filePath = '.' + request.url,
            tokens = filePath.split('/'),
            action = tokens[1],
            agent = request.headers['user-agent'];

        if (agent != null
            && (agent.indexOf('facebookexternalhit') > - 1
                || agent.indexOf('Facebot') > -1)
            && path.extname(filePath) != '.jpg') {
            handleFacebookBot(request, response);
        }

        if (filePath == './')
            filePath = './index.html';

        if (filePath == './server.js' || filePath == './data.js'){
            response.writeHead(404, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*'});
            response.end('', 'utf-8');
        }

        var contentType = getContentType(path.extname(filePath));

        console.log('filePath:' + filePath);
        response.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*'});

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
            case 'register':
                register(request, response);
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