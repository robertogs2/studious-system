'use strict';

let express = require('express');
let router = module.exports = express.Router();
let bodyParser = require('body-parser')
let url = require('url');
let querystring = require('querystring');
let request = require('request');

let mainurl = "https://modis.ornl.gov/rst/api/v1/"
//app.use(bodyParser.urlencoded({ extended: false }));


router.get('/get', async function(req, res){
	let product = String(req.query.product)
    let latitude = String(req.query.latitude);
    let longitude = String(req.query.longitude);
    let band = String(req.query.band);
    let startDate = String(req.query.startDate);
    let endDate = String(req.query.endDate);
    let kmAboveBelow = String(req.query.kmAboveBelow);
    let kmLeftRight = String(req.query.kmLeftRight);
    
	let query_params = "?latitude=" + latitude +
	"&longitude=" + longitude +
	"&band=" + band +
	"&startDate=" + startDate +
	"&endDate=" + endDate +
	"&kmAboveBelow=" + kmAboveBelow +
	"&kmLeftRight=" + kmLeftRight;

	let final_query = mainurl + product +"/subset" + query_params;
	console.log(final_query);

	let options = {"encoding":"utf-8", 
					"method":"GET", 
					"uri": final_query, 
					"followRedirect":false, 
					headers:  {
						'Host': 'modis.ornl.gov'
    				}
    			}

	await request.get(options, async function(erri, resi, bodyi){
		if (erri){
			return console.log(erri);
		}
		console.log(bodyi);
		res.send(bodyi);
	});

	//let response = await promisifiedRequest(options);

	// console.log(response.headers);
	// console.log(response.body);

    // executeQuery(query_data, function(err, rows, fields){
    //     if (err) res.send(err);
    //     var string = JSON.parse(JSON.stringify(rows))
    //     res.send(string);
    // });
});
