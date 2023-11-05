const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
const connectToDatabase = require("./Config/db");
// const civilianRouter = require('./Router/civilian.route');
const civilianRouter = require('./Router/user.route');
// const policemenRouter=require('./Router/registerLoginPolicemen.route');
const bagRouter = require('./Router/missingBag.route');
const foundBagRouter = require('./Router/foundBag.route');
 const foundHumanRouter = require('./Router/foundHuman.route');
const foundOtherRouter = require('./Router/foundOther.route');
const foundVehicleRouter = require('./Router/foundVehicle.route');
const vehicleRouter = require("./Router/missingVehicle.route")
const missingOtherRouter = require("./Router/missingOther.route");
const videoRouter = require("./Router/video.route");
const HumanRouter = require('./Router/missingHuman.route');
const missingMobile = require("./Router/MissingMobile.route");
const PetRouter = require("./Router/missingPet.route");
const allComplaints = require("./Router/allComplaints.route");
const contactUs = require("./Router/contactUs.router");
const profileRouter = require("./Router/profile.route");
const { postphonebook, getphonebook, deletephonebook } = require('./Router/phonebooks.route');
const { emergancyRoute, getnotificationRoute, deletenotificationRoute, getAllnotificationRoute, acceptCallRequestRoute } = require('./Router/emergancyCall.route');
const { sendNotification } = require('./sendnotification/sendNotifications');
const app = express();
const port = process.env.PORT || 8080;


const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });


//image
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

// app.use('/civilian', civilianRouter);
app.use('/civilian', civilianRouter);
app.use('/missing-bag', bagRouter);
app.use('/found-bag', foundBagRouter);
app.use('/found-human', foundHumanRouter)
app.use('/found-other', foundOtherRouter)
app.use('/missing-vehicle', vehicleRouter);
app.use("/missingOther", missingOtherRouter);
// app.use('/registerLoginPolicemen',policemenRouter);
app.use("/missingOther" ,missingOtherRouter);
app.use("/VideoRoute", videoRouter);
app.use("/contactUs" , contactUs);
app.use("/missingHuman" , HumanRouter);
app.use('/found-vehicle', foundVehicleRouter);
app.use("/complaints" , allComplaints);
app.use('/user' , profileRouter);
app.use("/missing-pet" , PetRouter);
app.use("/missing-mobile" , missingMobile);

// emergancy  call routes
app.use('/user', emergancyRoute);
app.use('/user', sendNotification);
app.use('/police', getnotificationRoute);
app.use('/police', deletenotificationRoute);
app.use('/police', getAllnotificationRoute);
app.use('/police', acceptCallRequestRoute);

// user profile related routes
app.use('/user', postphonebook);
app.use('/user', getphonebook);
app.use('/user', deletephonebook);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})



app.listen(port, async () => {
    try {
        await connectToDatabase();
        console.log(port, "<<port");
    } catch (err) {
        console.log({ message: "Failed to connect Database", err });
    }
});

console.log("hi")
io.on('connection', (socket) => {
    console.log('A user connected  ' + socket.id);
    console.log("hello")
    socket.on('locationUpdate', (locationData) => {
        io.emit('locationUpdated', locationData);
    });



    socket.on('disconnect', () => {
        console.log('A user disconnected  ' + socket.id);
    });
});
