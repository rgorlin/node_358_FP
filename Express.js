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

var server=app.listen(3000,function() {});


function getStars(stars, res) {
    var con = mysql.createConnection({
        host: "localhost",
        username: "admin",
        password: "password",
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
