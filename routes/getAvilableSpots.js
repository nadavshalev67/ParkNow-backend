const express = require("express")
const Router = express.Router();
const mySqlConnection = require("../connection")

Router.post("/" , (req,res) => {

    const start_time = req.body.start_time;
    const finish_time = req.body.finish_time;
    const date = req.body.date;
    var query;
    if(start_time == null || finish_time == null | date == null){
         mySqlConnection.query("select * from available_parking" , (err,rows,fields) =>{
            if(!err)
            {   
                res.send(rows);
            }
            else
            {
                console.log(err);
            }
        })
    }
    else{
        mySqlConnection.query("select * from available_parking where start_time >= ? AND finish_time <= ? AND date = ?" ,[start_time,finish_time,date ],(err,rows,fields) =>{
            if(!err)
            {
                res.send(rows);
            }
            else
            {
                console.log(err);
            }
        })
    }


  
})



module.exports = Router;