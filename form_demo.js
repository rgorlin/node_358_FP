const http = require('http');
const fs = require('fs');
 const url = require('url');

 http.createServer(function(req, res){
     const q = url.parse(req.url, true);
     res.writeHead(200, {'Content-type': 'text/html'});
     fs.readFile("./form.html", function(err, data){
         if(err){
             res.writeHead(200, {'Content-type': 'text/html'});
             return res.end("404 error not found.")
         }
         res.write(data);
     });

     if(q.pathname == "/form"){
         const query = q.query;
         console.log(query);
        console.log(query.fname);
        console.log("You did a get from form.");
        console.log(q.pathname);
        res.write("Name: " + query.fname + " " + query.lname );
        res.write("<br>Message: " + query.message);
        res.write("<br>Email: " + query.email)
        sendAnEmail( query.fname, query.lname, query.message, query.email);
        res.write("We have received your information");

    }

 }).listen(8080);

 function sendAnEmail(fname, lname, message, emailAdd){
     var nodemailer = require('nodemailer');

     var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
             user: 'InsertEmailHere',
             pass: 'InsertPasswordHere'
         }
     });

     var mailOptions = {
         from: 'YOUREMAIL@gmail.com',
         to: emailAdd,
         subject: 'Message received from form submission',
         html: '<h3>From: ' + fname + ' ' + lname + '</h3>' +
             '<h3>Email Address: ' + emailAdd + '</h3>' +
             '<h2>Message:</h2><p>' + message + '</p>',
     };

     transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
    
        else {
            console.log('Email sent: ' + info.response);
        }
    });
 }