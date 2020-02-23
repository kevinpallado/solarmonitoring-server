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
    s = new WebSocket.Server({ server: server, path: "/readings", noServer: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(express.static("public"));
app.get('/chart', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/chart.html'));
});
app.get('/readings', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/readings.html'));
});

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: ' + add);
});


s.on('connection', function (ws, req) {
    ws.on('message', function (message) {
        s.clients.forEach(function (client) { //broadcast incoming message to all clients (s.clients)
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
    var http_post_req = {
        method: 'post',
        body: {
            temperatureC: 123,
            temperatureF: 25.3,
            voltage: 70,
            current_1: 255,
            current_2: 100,
            current_3: 100,
            current_4: 200,
            current_5: 200,
            current_6: 100
        },
        json: true,
        url: "http://localhost:5000/api/readings/event?event=readings&method=record_readings"
    }

    // request(http_post_req, function (err, res, body) {
    //     if (err) throw err;
    //     console.log(res.statusCode);
    // })
});

server.listen(5000);