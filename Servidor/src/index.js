const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function (req, res, next) { 

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/assets',express.static('./assets'));

app.use('/api/usuario', require('./endpoints/usuario.js'));


//Starting the server
const server= app.listen(3000, () => {
    console.log(` Server on port ${app.get('port')} `);
});