'use strict';

const emailer = require('../tools/emailer');

let express = require('express');
let router = module.exports = express.Router();
let bodyParser = require('body-parser')

//localhost:5000/api/email/send

/*
{
	"info" : {
		"from" : "aramtecc@gmail.com",
		"to" : "roberm98a@gmail.com",
		"subject" : "Hola",
		"text" : "hola abajo"
	}
}
*/

router.post('/send', function(req, res){
    let info = req.body.info;
    console.log(req.body);
    emailer.send(info);
    res.send("done");
});