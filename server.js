// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5050;
app.listen(port);

app.get('/', (res,) => {
    res.set({ 'Access-Control-Allow-Origin': 'https://moyamush-todoapp.herokuapp.com/' }); // ここでヘッダーにアクセス許可の情報を追加
  });
console.log('server started '+ port);