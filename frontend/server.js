var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/font/', express.static(__dirname + '/font'));
app.use('/build', express.static(__dirname + '/build'));
app.use('/build', express.static(__dirname + '/build'));

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(process.env.PORT || 3006);
