const dbconnect = require('./db_connect');

var query;

function get_articles(){
    query = "SELECT * FROM articles";
    dbconnect.connectToDB(query);
}

