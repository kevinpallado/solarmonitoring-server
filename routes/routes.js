const express = require('express'),
    Readings = require('../core/readings'),
    Router = express.Router();

Router.post("/readings/event", async (req, res) => {

    var response;
    switch (req.query.event) {
        case "readings":
            response = await Readings.add(req.query.method, req.body);
            break;
        case "list-readings":
            response = await Readings.view(req.query.method, req.body);
            break;
        case "read-date":
            response = await Readings.view(req.query.method, req.body);
            break;
        default:
            break;
    }
    res.send(JSON.stringify(response));

});

Router.get("/readings/data", async (req, res) => {

    var response;

    switch (req.query.event) {
        case "read":
            response = await Readings.view(req.query.method, req.body);
            break;
        default:
            break;
    }
    res.send(JSON.stringify(response));
})

Router.post("/testinsert", async (req, res) => {
    const dataupdate = {
        datefrom: req.body.date_from,
        dateto: req.body.date_to,
        timefrom: req.body.time_from,
        timeto: req.body.time_to,
    }
    res.json(dataupdate);
})

module.exports = Router;