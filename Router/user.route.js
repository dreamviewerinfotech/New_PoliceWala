// routes/userRoutes.js
const express = require('express');
const civilianRouter = express.Router();
const civilianController = require('../Controlller/user.controller');


// Register a new user
civilianRouter.post('/register',civilianController.registerCivilian);
civilianRouter.post('/login', civilianController.loginCivilian);
civilianRouter.put('/forgotpassword', civilianController.forgatePassword);

module.exports = civilianRouter;

//image
