const mysql = require('mysql');

var connectToDB = function connectToDB(query){
   var dbconnect = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "nodejs-testing"
});

dbconnect.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    dbconnect.query(query, function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
}); 
}

module.exports.connectToDB = connectToDB;