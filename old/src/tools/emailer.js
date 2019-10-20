'use strict'
const nodemailer = require("nodemailer");

let expose = {
	send : null
}

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'theelementals2019@gmail.com',
        pass: 'avatar2019'
    }
});

expose.send = async function send(info){
	var mailOptions = {
	    from: info.from,
	    to: info.to,
	    subject: info.subject,
	    text: info.text,
	};
	var info = await transporter.sendMail(mailOptions);
}

// expose this file as a module based on the expose object
module.exports = expose;
