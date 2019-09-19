var mysql      = require('mysql');
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

 
//connection.query('SELECT  1 + 1 AS solution', function (error, results, fields) {
 // if (error) throw error;
  //console.log('The solution is: ', results[0].solution);
//});
 

var  userAddSql = 'INSERT INTO employee(id,name,age,sex) VALUES(0,?,?,?)';
var  userAddSql_Params = ['Wilson2', 10,'male'];

var userAddSql = 'UPDATE employee SET name = ?,age = ? WHERE Id = ?';
var userAddSql_Params = ['钟慰2', '20',3];

//增
connection.query(userAddSql,userAddSql_Params,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        

       console.log('--------------------------result----------------------------');
         
      // console.log('INSERT ID:',result);     
       console.log('update ID:',result);    
       console.log('-----------------------------------------------------------------\n\n');  
});


var  userGetSql = 'SELECT * FROM employee';
//查
connection.query(userGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }        

       console.log('--------------------------SELECT----------------------------');
       console.log(result);        
       console.log('-----------------------------------------------------------------\n\n');  
});



var  userDelSql = 'DELETE FROM employee where id=3';
//删
connection.query(userDelSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        

       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');  
});


//-------------
 
connection.end();
