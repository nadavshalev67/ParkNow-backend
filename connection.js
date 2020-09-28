const mysql = require("mysql")

var mySqlConnection = mysql.createConnection(
    {
    host : "localhost",
    user: "root",
    password: "root1234",
    database: "MyPark",
    multipleStatements : true
    }
);


mySqlConnection.connect((err) => {
    if(!err){
        console.log("Connection Sucsses");
    }
    else{
        console.log("Connection Failed");
    }


})

module.exports = mySqlConnection;
