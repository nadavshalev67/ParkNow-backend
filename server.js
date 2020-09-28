
const express = require("express")
const bodyParser = require("body-parser")
const mySqlConnection = require("./connection")
const AviableSpotRoute = require("./routes/getAvilableSpots")
const CreateSpotRoute = require("./routes/createSpot")
const OwnerSpotRoute = require("./routes/getSpotOwner")

var app = express();
app.use(bodyParser.json());
app.use("/getAvilableSpots",AviableSpotRoute);
app.use("/createSpot",CreateSpotRoute);
app.use("/getOwnerSpot",OwnerSpotRoute);
app.listen(3000);