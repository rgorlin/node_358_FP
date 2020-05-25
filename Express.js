var express = require('express');
var app = express();
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