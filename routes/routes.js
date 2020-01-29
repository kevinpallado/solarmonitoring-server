const express = require('express'),
      Readings = require('../core/readings'),
      Router = express.Router();
      
Router.post("/readings/event", async(req, res) => {

    var response;
    switch(req.query.event){
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

module.exports = Router;