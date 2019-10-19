"use strict";

// Module that handles the RESTful service routes
let express = require('express');
let router = module.exports = express.Router();
const mysqlTool = require('../tools/mysql-tool');

function executeQuery(query, callback) {
    let res = '';
    let pool = mysqlTool.getPool();
    pool.query(query, function (err, rows, fields) {
        if (err) throw err;
        return callback(err, rows, fields);
    });
}

router.get('/', function(req, res){
    var stuff_i_want = '';
    var query = 'select * from Category';
    executeQuery(query, function(err, rows, fields){
        console.log('Fields: ', rows);
        var string = JSON.parse(JSON.stringify(rows))
        res.send(string);
    });
});