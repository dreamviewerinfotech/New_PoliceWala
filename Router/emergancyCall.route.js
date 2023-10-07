

const express = require("express");
const { postEmergancyCall, getemergancynotification, deletenotification, getAllnotification } = require("../Controlller/emergancyCall.controller");
const { ExistingUser } = require("../Middlewares/authMiddleware");
const rounter = express.Router();


 const emergancyRoute = rounter.post("/emergancy-call" , postEmergancyCall );
 const getnotificationRoute = rounter.get("/get-notification" , getemergancynotification);
 const deletenotificationRoute = rounter.delete("/delete-notification/:id" ,ExistingUser , deletenotification);
 const getAllnotificationRoute = rounter.get("/all-notification/" , getAllnotification);

module.exports = {emergancyRoute ,getnotificationRoute ,deletenotificationRoute,getAllnotificationRoute };