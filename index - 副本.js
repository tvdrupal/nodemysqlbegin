const express = require('express')
const app = express()
 

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();

app.get('/', function (req, res) {
  res.send('Hello Worldfff')
})
 
app.listen(3000)