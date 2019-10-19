'use strict'

let express = require('express'),
    //upload = require('express-fileupload'),
    //cors = require('cors'),
    path = require('path'),
    bodyParser  = require('body-parser');

const mysqlTool = require('./src/tools/mysql-tool');
const PORT = process.env.PORT || 5000;

let app = express();

app.use('/',express.static('public'))
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('Nothing in here')
});

/// Main router of the api
let handler = require('./src/controllers/handler')
app.use('/api/', handler);


/*app.get('/', (req, res) => res.send('Prueba2'))
    .get('/test', (req, res) => test(res))
    .get('/times', (req, res) => res.send(showTimes()))
    .get('/vivir', (req, res) => res.send('Estoy vivo tambien prro :v'))*/
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));

mysqlTool.getPool();
