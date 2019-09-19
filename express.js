var mysql      = require('mysql');
const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_mysql'
});
 
//connection.connect();

connection.connect(function(err){
    if(err){        
          console.log('[query] - :'+err);
        return;
    }
      console.log('[connection connect]  succeed!');
}); 

 
app.listen(3003,()=>console.log('.........'));


app.get('/employee', function (req, res) { 

        var  userGetSql2 = 'SELECT * FROM employee';
         connection.query(userGetSql2,function (err, rows, fields) {
          if(!err)  res.send(rows);
          else console.log(err);  
      }); 
})




app.get('/employee/:id', function (req, res) { 

    var  userGetSql2 = 'SELECT * FROM employee where id = ?';
    connection.query(userGetSql2,[req.params.id],function (err, rows, fields) {
        if(!err)  res.send(rows);
        else console.log(err);  
      }); 
})
//delete id 
app.delete('/employee/:id', function (req, res) { 

    var  sql = 'delete  FROM employee where id = ?';
    connection.query(sql,[req.params.id],function (err, rows, fields) {
        if(!err)  res.send('delete '+req.params.id);
        else console.log(err);  
      }); 
})

//insert id 
app.post('/employee', function (req, res) { 
  var values2 = [
    ['John', 22, 'female'],
    ['Peter', 21 , 'male']
  
  ];
    
    // {"name":"Wilsonccccc","age":10,"sex":"male"}
    let value = req.body;
    var values = [[value.name,value.age,value.sex]];

   // var values = [['Johncc', 22, 'female']];

console.log(value);

     var sql = "INSERT INTO employee (name, age,sex) VALUES ?";

    connection.query(sql,[values],function (err, rows, fields) {
        if(!err)  {
               res.send('insert id successfully');
                //res.send('insert id:'+rows.insertId);
               // rows.forEach( element =>{
                 // if(element.constructor==Array)  res.send('insert id:'+ element[0].id);
               // })            

            }
          
         else console.log(err);  
      }); 
})

//update id 
app.put('/employee/:id', function (req, res) { 
 
    
    // {"name":"Wilsonccccc","age":10,"sex":"male"}
    let value = req.body;
   var values =[value.name,value.age,value.sex,req.params.id];

   // var values = [['Johncc', 22, 'female']];

console.log(value);

//UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?

     var sql = "UPDATE employee SET name = ?, age = ?, sex = ?  where id = ?";

    connection.query(sql,values,function (err, rows, fields) {
        if(!err)  {
               res.send('update id successfully'); 

            }
          
         else console.log(err);  
      }); 
})

 

//-----------------------
 



//-------------
 
//connection.end();


