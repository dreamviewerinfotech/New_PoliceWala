const express = require("express");
const HumanRouter = express.Router();
const humanController = require("./../Controlller/missingHuman.controller");
const { ExistingUser } = require("../Middlewares/authMiddleware");

HumanRouter.post("/missing-human", ExistingUser, humanController.missingHumanReport);

module.exports = HumanRouter;

//image