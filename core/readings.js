const db = require('../connection');

function add(event, data) {
    return new Promise((resolve, reject) => {
        switch (event) {
            case "record_readings":
                var sql_add = "INSERT INTO readings (temperatureC, temperatureF, voltage, current_1, current_2, current_3, current_4, current_5, current_6) VALUES ('" 
                            + data.temperatureC + "','" 
                            + data.temperatureF + "','" 
                            + data.voltage + "','" 
                            + data.current_1 + "','" 
                            + data.current_2 + "','"
                            + data.current_3 + "','" 
                            + data.current_4 + "','" 
                            + data.current_5 + "','" 
                            + data.current_6 + "')";
                db.query(sql_add, (err, rows, results) => {
                    if(err) throw err;
                    resolve(rows.affectedRows);
                });
                break;
            default:
                break;
        }
    });
}

function view(event, data) {
    var dataResponse = [];
    return new Promise((resolve, reject) => {
        switch(event) {
            case "all":
                var sql_view = "SELECT * from readings"
                db.query("SELECT * from readings", (err, rows, results) => {
                    for(var i = 0; i < rows.length; i++)
                    {
                        dataResponse.push({
                            id: rows[i]._id,
                            tc: rows[i].temperatureC,
                            tf: rows[i].temperatureF,
                            v: rows[i].voltage,
                            c1: rows[i].current_1,
                            c2: rows[i].current_2,
                            c3: rows[i].current_3,
                            c4: rows[i].current_4,
                            c5: rows[i].current_5,
                            c6: rows[i].current_6,
                            daterecorded: rows[i].dateRecorded
                        });
                    }
                    resolve(dataResponse);
                });
            break;

            default:
                break;
        }
    })
}
module.exports = {
    add: add,
    view: view
}