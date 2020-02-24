const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http'),
    routes = require('./routes/routes'),
    path = require('path'),
    cron = require('node-cron'),
    request = require('request'),
    app = express(),
    server = http.createServer(app),
    WebSocket = require('ws'),
    s = new WebSocket.Server({ server: server, path: "/readings", noServer: true, perMessageDeflate: false});

// app.use(cors({
//     origin: '*'
// }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-xsrf-token, x_csrftoken');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', routes);
// app.use(express.static("public"));

var readings = [];
// app.get('/chart', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/chart.html'));
// });
// app.get('/readings', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/readings.html'));
// });

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: ' + add);
});


s.on('connection', function (ws, req) {
    ws.on('message', function (message) {
        s.clients.forEach(function (client) { //broadcast incoming message to all clients (s.clients)
            var data_read = JSON.parse(message);
            readings.push({
                temperatureC: data_read.Temperature,
                voltage: data_read.Voltage,
                current_1: data_read.Current1,
                current_2: data_read.Current2,
                current_3: data_read.Current3,
                current_4: data_read.Current4,
                current_5: data_read.Current5,
                current_6: data_read.Current6
            });

            if (client != ws && client.readyState == 1) { //except to the same client (ws) that sent this message
                client.send(JSON.stringify(message));
            }
        });
    });

    ws.on('close', function () {
        console.log("lost one client");
    });

    console.log("new client connected");
});

cron.schedule('*/10 * * * * *', () => {
    console.log("Execute every 10 seconds");

    if(readings.length > 0)
    {
        var http_post_req = {
            method: 'post',
            body: readings[0],
            json: true,
            url: "http://localhost:5000/api/readings/event?event=readings&method=record_readings"
        }
        
        request(http_post_req, function (err, res, body) {
            if (err) throw err;
            console.log(res.statusCode);
            readings.length = 0;
        })
    }
    
});

server.listen(5000);