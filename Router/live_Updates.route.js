

const express = require("express");
const LiveUpdateRouter = express.Router();
const LiveUpdateController = require("./../Controlller/live_updates.controller")



LiveUpdateRouter.post("/addLiveUpdate"  , LiveUpdateController.createUpdate);
LiveUpdateRouter.get("/allLiveUpdates"  , LiveUpdateController.getLiveUpdates);
LiveUpdateRouter.put("/updateLive/:id" , LiveUpdateController.updateLive);
LiveUpdateRouter.delete("/deleteLive/:id" ,  LiveUpdateController.deleteLive_Update);

module.exports = LiveUpdateRouter;