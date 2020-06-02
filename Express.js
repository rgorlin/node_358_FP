var express = require('express');
var app = express();
var mysql = require('mysql');
var nodemailer = require('nodemailer');
app.set('view engine', 'pug');
app.use(express.static(__dirname+'/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.route('/home').get(function(req,res)
{
    res.render('home')
});
app.route('/contact_us').get(function(req,res)
{
    res.render('contact')
    app.get('/contact', (req, res) =>{
        res.render('contact',{
            title: 'Contact us'
        });
    });

    /**
     * Recieved the contact page. Send them to confirmation page and process the data
     */
    app.post('/contact_action', (req, res) => {
        //Send them a confirmation email
        sendEmail(req.body.email);
        console.log(req.name);
        res.render('confirmation', {
            title: 'Confirmation',
            name: req.body.name,
            number: req.body.phoneNumber

        });
    });
});
app.route('/about').get(function(req,res)
{
    res.render('about')
});
app.get('/stars', function (req,res) {
    try {
        var Stars = [];
        getStars(Stars, res);
    }
    catch (e) {
        console.log('DB error!');
    }

});
app.get('/',function(req,res){
    res.render('home')
});
function sendEmail(emailAdd){
    var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mystar.frontendfinalproject@gmail.com',
            pass: 'MyStar123!?'
        }
    });

    var mailOptions = {
        from: 'mystar.frontendfinalproject@gmail.com',
        to: emailAdd,
        subject: 'Phone call Confirmation',
        html: 'Hi there! <br> This is a confirmation email for your requested phone call <br> One of our dedicated reps will be calling you shortly.<br>Looking forward to speaking with you, <br>My Star'
    };

    transport.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
}
var server=app.listen(3000,function() {});


function getStars(stars, res) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "MyStar"

    });

    con.connect(function (err) {

        if(err) throw err;
        else{
            console.log("connected!");
        }

        var sql = "select * from star";

        con.query(sql, function(err, result, fields){
            if (err){
                console.log("err");
                throw err;
            }
            for(var i = 0; i < result.length; i++){
                console.log("hello" + result[i]);

                var Star = {
                    'name': result[i].NAME,
                    'dt_uploaded': result[i].DT_UPLOADED,
                    'price': result[i].PRICE,
                    'description': result[i].DESCRIPTION
                };

                stars.push(Star);
            }

            res.render('stars', {
                title: 'Stars Available',
                list: stars
            });
        });
    });

}
