const express = require("express")
const Router = express.Router();
const mySqlConnection = require("../connection")
const date = require('date-and-time');

Router.post("/" , (req,res) => {
    const uuid = req.body.uuid;
    if(uuid == null){
        return;
    }
    var sql = "select * from activate_spots where uuid = ?";    
    mySqlConnection.query(sql,uuid,(err,rows,fields) =>{
        if(!err)
        {   
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    })

})


module.exports = Router;