const express = require('express');
const engine = require('ejs-mate');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const Settings = require('./settings/settings');

const PORT = Settings.port;
const MESSAGE = Settings.serverResponse + PORT;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.listen(PORT, function() {
    console.log(MESSAGE);
    console.log("### Запускать по адресу -> localhost:" + PORT);
});