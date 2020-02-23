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
        default:
            break;
    }
    res.send(JSON.stringify(response));

});

Router.get("/testing/data", async (req, res) => {
    try {
        res.json({ voltage: 100, temperature: 50, c1: 123, c2: 234, c3: 345, c4: 456, c5: 678, c6: 789 })
    }
    catch (err) {
        res.json({ message: err })
    }
})

module.exports = Router;