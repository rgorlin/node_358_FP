var express = require('express');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'pug');
app.use(express.static(__dirname+'/public'));
app.route('/home').get(function(req,res)
{
    res.render('home')
});
app.route('/contact_us').get(function(req,res)
{
    res.render('contact')
});
app.route('/about').get(function(req,res)
{
    res.render('about')
});
app.get('/',function(req,res){
    res.render('home')
});
var server=app.listen(3000,function() {});


function getStars() {
    var con = mysql.createConnection({
        host: "localhost",
        username: "root",
        password: "",
        database: "MyStar",

    });

    con.connect(function () {

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
                                
            }

            console.log("done looping");
            //return classes;

        });

    })

}
