"use strict";

let express = require('express');
let router = module.exports = express.Router();
let bodyParser = require('body-parser')
const mysqlTool = require('../tools/mysql-tool');

function executeQuery(query, callback) {
    let pool = mysqlTool.getPool();
    pool.query(query, function (err, rows, fields) {
        if (err) throw err;
        return callback(err, rows, fields);
    });
}

function executeStoreProcedure(data, callback) {
    let mysql_query = `CALL ${data.query}`;
    let mysql_params = data.params;
    console.log(mysql_params)
    let pool = mysqlTool.getPool();
    pool.query(mysql_query, mysql_params, function (err, rows, fields) {
        return callback(err, rows, fields);
    });
}

router.post('/normal', function(req, res){
    let mysql_query = req.body.query;
    console.log(mysql_query)
    executeQuery(mysql_query, function(err, rows, fields){
        if (err) res.send(err);
        var string = JSON.parse(JSON.stringify(rows))
        res.send(string);
    });
});

router.post('/procedure', function(req, res){
    let data = req.body.data;
    executeStoreProcedure(data, function(err, rows, fields){
        var string = JSON.parse(JSON.stringify(rows))
        res.send(string);
    });
});

router.post('/procedurein', function(req, res){
    let data = req.body.data;
    res.send("done");
    executeStoreProcedure(data, function(err, rows, fields){
        //var string = JSON.parse(JSON.stringify(rows))
        //res.send(string);
    });
});