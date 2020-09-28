const express = require("express")
const Router = express.Router();
const mySqlConnection = require("../connection")
const crypto = require("crypto");
const date = require('date-and-time');

Router.post("/" , (req,res) => {
    const price = req.body.price;
    const start_time = req.body.start_time;
    const finish_time = req.body.finish_time;
    const lng = req.body.lng;
    const lat = req.body.lat;
    const adress = req.body.adress;
    var keySpot = crypto.randomBytes(20).toString('hex');
    var currentDate = new Date();
    const day =  date.format(currentDate,'DD/MM/YYYY');
    const day1 =  date.format(date.addDays(currentDate,1),'DD/MM/YYYY');
    const day2 =  date.format(date.addDays(currentDate,2),'DD/MM/YYYY');
    const user_name = req.body.user_name;
    const uuid = req.body.uuid;
    var sql = "INSERT INTO available_parking (spot_key,user_name,uuid,date,start_time,finish_time,lng,lat,price,adress) VALUES ? ;"+
              "INSERT INTO activate_spots (uuid,spot_key,start_time,finish_time,price,adress) VALUES ? ;";
    var valuesFirst = [
        [keySpot,user_name,uuid,day,start_time,finish_time,lng,lat,price,adress],
        [keySpot,user_name,uuid,day1,start_time,finish_time,lng,lat,price,adress],
        [keySpot,user_name,uuid,day2,start_time,finish_time,lng,lat,price,adress]
    ];
    var valuesSecond = [[uuid,keySpot,start_time,finish_time,price,adress]];
    
    mySqlConnection.query(sql,[valuesFirst,valuesSecond],(err,rows,fields) =>{
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