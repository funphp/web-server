var express = require('express');
var app = express();
var port = process.env.POST || 3000;  //listening heroku port

var middleware = require('./middleware');

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('About Page');
});

app.use(express.static(__dirname+'/public'));

app.listen(port, function(){
    console.log('Server is running on port '+port);
})
