const mysql = require('mysql');
const sql = require('./connectionscript')
const connection= sql.db.get;
const express = require('express')
const routerInstance = express.Router();





routerInstance.get('/',(req,res)=>{      
         connection.query("SELECT * FROM teacher_user", (error, results, fields) => {          
            if (error) throw error;
            res.end(JSON.stringify(results,null,4));                             
  });
});


routerInstance.get('/:id', (req, res, next) => {
   connection.query('SELECT * FROM teacher_user WHERE id=?', [req.params.id], (error, results, fields)=> {
	  if (error) throw error;
      res.end(JSON.stringify(results,null,4));
	});
});


routerInstance.post('/', (req, res, next)=> {
    var postData  = req.body;
    console.log(postData);
    connection.query('INSERT INTO teacher_user SET ?', postData, (error, results, fields)=> {
       if (error) throw error;      
       res.end([results,postData]);
     })     
 });

 
 routerInstance.put('/', function (req, res) {
    connection.query('UPDATE `teacher_user` SET `name`=? WHERE `id`=? ', [req.body.name,req.body.id],(error, results, fields)=> {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });
 

 routerInstance.delete('/:id', function (req, res) {
    connection.query('DELETE FROM `teacher_user` WHERE `id`=?', [req.params.id], function (error, results, fields) {
     if (error) throw error;
     res.end('Record has been deleted!');
   });
 });
 
 module.exports=routerInstance;