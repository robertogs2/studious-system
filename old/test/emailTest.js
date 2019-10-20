const emailer = require('../src/tools/emailer.js');

var info = {
	from : 'aramtecc@gmail.com',
	to : 'roberm98a@gmail.com',
	subject : 'Hola',
	text : 'hola abajo'
}

emailer.send(info);