const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    http = require('http'),
    routes = require('./routes/routes'),
    path = require('path'),
    cron = require('node-cron'),
    request = require('request'),
    app = express();
app.use(cors());

const server = http.createServer(app),
    WebSocket = require('ws'),
    s = new WebSocket.Server({ server: server, path: "/readings", noServer: true, perMessageDeflate: false });


// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-xsrf-token, x_csrftoken');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
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

            var voltage = data_read.Voltage;
            var current1 = data_read.C1;
            var current2 = data_read.C2;
            var current3 = data_read.C3;
            var current4 = data_read.C4;
            var current5 = data_read.C5;
            var current6 = data_read.C6;

            var power1 = (current1 * voltage).toFixed(2);
            var power2 = (current2 * voltage).toFixed(2);
            var power3 = (current3 * voltage).toFixed(2);
            var power4 = (current4 * voltage).toFixed(2);
            var power5 = (current5 * voltage).toFixed(2);
            var power6 = (current6 * voltage).toFixed(2);

            data_read.power1 = power1;
            data_read.power2 = power2;
            data_read.power3 = power3;
            data_read.power4 = power4;
            data_read.power5 = power5;
            data_read.power6 = power6;

            readings.push({
                temperatureC: data_read.TemperatureC,
                voltage: voltage,
                current_1: current1,
                current_2: current2,
                current_3: current3,
                current_4: current4,
                current_5: current5,
                current_6: current6,
                power1 : power1,
                power2 : power2,
                power3 : power3,
                power4 : power4,
                power5 : power5,
                power6 : power6,
            });
            // readings.push({
            //     temperatureC: data_read.Temperature,
            //     voltage: data_read.Voltage,
            //     current_1: data_read.Current1,
            //     current_2: data_read.Current2,
            //     current_3: data_read.Current3,
            //     current_4: data_read.Current4,
            //     current_5: data_read.Current5,
            //     current_6: data_read.Current6
            // });

            if (client != ws && client.readyState == 1) { //except to the same client (ws) that sent this message
                client.send(JSON.stringify(data_read));
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