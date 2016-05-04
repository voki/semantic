var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/main', function (req, res) {
    res.render('main');
});

app.post('/', function (req, res) {
    var email = req.body.email;
    var passwd = req.body.passwd;
    console.log("Email: %s, Passwrd: %s", email, passwd);
    res.render('home');
});


app.listen(3000);

