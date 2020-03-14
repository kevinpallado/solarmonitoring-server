const db = require('../connection');

function add(event, data) {
    return new Promise((resolve, reject) => {
        switch (event) {
            case "record_readings":
                console.log("adding hehe")
                var sql_add = "INSERT INTO readings (temperatureC, voltage, current_1, current_2, current_3, current_4, current_5, current_6,power_1,power_2,power_3,power_4,power_5,power_6) VALUES ('"
                    + data.temperatureC + "','"
                    + data.voltage + "','"
                    + data.current_1 + "','"
                    + data.current_2 + "','"
                    + data.current_3 + "','"
                    + data.current_4 + "','"
                    + data.current_5 + "','"
                    + data.current_6 + "','"
                    + data.power_1 + "','"
                    + data.power_2 + "','"
                    + data.power_3 + "','"
                    + data.power_4 + "','"
                    + data.power_5 + "','"
                    + data.power_6 + "')";
                db.query(sql_add, (err, rows, results) => {
                    if (err) throw err;
                    console.log(results);
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
        console.log("EVENT => " + event + " => " + data.dateTo);
        switch (event) {
            case "all":
                var sql_view = "SELECT * from readings"
                db.query("SELECT * from readings", (err, rows, results) => {
                    for (var i = 0; i < rows.length; i++) {
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
                            daterecorded: rows[i].createdAt
                        });
                    }
                    resolve(dataResponse);
                });
                break;
            case "all-temperature-data":
                var sql_view = "SELECT id,temperatureC,createdAt FROM readings LIMIT 20"
                db.query(sql_view, (err, rows, results) => {
                    if (rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            dataResponse.push({
                                id: rows[i].id,
                                tc: rows[i].temperatureC,
                                daterecorded: rows[i].createdAt
                            });
                        }
                        resolve(dataResponse);
                    }
                });
                break;
            
            case "all-voltage-data":
                var sql_view = "SELECT id,voltage,createdAt FROM readings LIMIT 20"
                db.query(sql_view, (err, rows, results) => {
                    if (rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            dataResponse.push({
                                id: rows[i].id,
                                voltage: rows[i].voltage,
                                daterecorded: rows[i].createdAt
                            });
                        }
                        resolve(dataResponse);
                    }
                });
                break;
            
            case "all-current-data":
                var sql_view = "SELECT id,current_1,current_2,current_3,current_4,current_5,current_6,createdAt FROM readings LIMIT 20"
                db.query(sql_view, (err, rows, results) => {
                    if (rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            dataResponse.push({
                                id: rows[i].id,
                                c1: rows[i].current_1,
                                c2: rows[i].current_2,
                                c3: rows[i].current_3,
                                c4: rows[i].current_4,
                                c5: rows[i].current_5,
                                c6: rows[i].current_6,
                                daterecorded: rows[i].createdAt
                                });
                            }
                            resolve(dataResponse);
                        }
                    });
                break;
            case "all-power-data":
                var sql_view = "SELECT id,power_1,power_2,power_3,power_4,power_5,power_6,createdAt FROM readings LIMIT 20"
                db.query(sql_view, (err, rows, results) => {
                    if (rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            dataResponse.push({
                                id: rows[i].id,
                                p1: rows[i].power_1,
                                p2: rows[i].power_2,
                                p3: rows[i].power_3,
                                p4: rows[i].power_4,
                                p5: rows[i].power_5,
                                p6: rows[i].power_6,
                                daterecorded: rows[i].createdAt
                                });
                            }
                            resolve(dataResponse);
                        }
                    });
                break;
            case "between-dates-temperature":
                var sql_test = "SELECT id,temperatureC,createdAt FROM readings WHERE createdAt BETWEEN '" + data.dateFrom + "' AND '" + data.dateTo + "'ORDER BY createdAt ASC LIMIT 20";
                db.query(sql_test, (err, rows, results) => {
                    if (rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            dataResponse.push({
                                id: rows[i].id,
                                tc: rows[i].temperatureC,
                                daterecorded: rows[i].createdAt
                            });
                        }
                        resolve(dataResponse);
                    }
                    });
                break;
            case "between-dates-voltage":
                var sql_test = "SELECT id,voltage,createdAt FROM readings WHERE createdAt BETWEEN '" + data.dateFrom + "' AND '" + data.dateTo + "'ORDER BY createdAt ASC LIMIT 20";
                console.log(sql_test);
                db.query(sql_test, (err, rows, results) => {
                    if (rows.length > 0) {
                        for (var i = 0; i < rows.length; i++) {
                            dataResponse.push({
                                id: rows[i].id,
                                voltage: rows[i].voltage,
                                daterecorded: rows[i].createdAt
                            });
                        }
                        resolve(dataResponse);
                    }
                    });
                break;

            case "between-dates-current":
                    var sql_test = "SELECT id,current_1,current_2,current_3,current_4,current_5,current_6,createdAt FROM readings WHERE createdAt BETWEEN '" + data.dateFrom + "' AND '" + data.dateTo + "'ORDER BY createdAt ASC LIMIT 20";
                    console.log(sql_test);
                    db.query(sql_test, (err, rows, results) => {
                        if (rows.length > 0) {
                            for (var i = 0; i < rows.length; i++) {
                                dataResponse.push({
                                    id: rows[i].id,
                                    c1: rows[i].current_1,
                                    c2: rows[i].current_2,
                                    c3: rows[i].current_3,
                                    c4: rows[i].current_4,
                                    c5: rows[i].current_5,
                                    c6: rows[i].current_6,
                                    daterecorded: rows[i].createdAt
                                });
                            }
                            resolve(dataResponse);
                        }
                        });
                    break;
            case "between-dates-power":
                    var sql_view = "SELECT id,power_1,power_2,power_3,power_4,power_5,power_6,createdAt FROM readings WHERE createdAt BETWEEN '" + data.dateFrom + "' AND '" + data.dateTo + "'ORDER BY createdAt ASC LIMIT 20";
                    db.query(sql_view, (err, rows, results) => {
                        if (rows.length > 0) {
                            for (var i = 0; i < rows.length; i++) {
                                dataResponse.push({
                                    id: rows[i].id,
                                    p1: rows[i].power_1,
                                    p2: rows[i].power_2,
                                    p3: rows[i].power_3,
                                    p4: rows[i].power_4,
                                    p5: rows[i].power_5,
                                    p6: rows[i].power_6,
                                    daterecorded: rows[i].createdAt
                                    });
                                }
                                resolve(dataResponse);
                            }
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