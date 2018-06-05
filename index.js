var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home',{maintenant: (new Date()).toLocaleTimeString()
});
app.get('/produit', function (req, res) {
  res.render('produit')
});
app.use(express.static('client'));

app.listen(3000);
