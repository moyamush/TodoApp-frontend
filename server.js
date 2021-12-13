// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5050;
app.listen(port);

app.get('/', (req, res) => {
    try {
	res.setHeader('Access-Control-Allow-Origin', 'https://moyamush-todoapp-frontend.herokuapp.com')
        res.status(201).send('ok')
    } catch (error) {
        console.error(error)
    }
})
console.log('server started '+ port);