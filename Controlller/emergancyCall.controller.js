




const EmergancyCall = require("./../Model/emergancycall.Modal");

const postEmergancyCall = async (req, res) => {
    try {
        // const {_id} = await req.civilian
        const newPhonebook = new EmergancyCall({...req.body ,timestamp: Date});
        await newPhonebook.save();
        res.json({ message: 'Thanks ! Your location is tracked',status:200 }).status(200);
    } catch (error) {
        console.log('Error occurred ! ', error);
        res.send(error.message).status(500);
    }
}



const getemergancynotification = async (req, res)=>{
    try { 
        const latestData = await EmergancyCall.findOne({}, {}, { sort: { 'createdAt': -1 } })
        if(latestData){
            res.json({ message: 'New notification',status:200 ,latestData  }).status(201);
        }else {
            res.json({ message: ' No any New notification',status:200 }).status(201);
        }
    } catch (error) {
        res.send(error.message).status(500);
    }
}


const getAllnotification = async (req, res)=>{
    try { 
        const allNotification = await EmergancyCall.find()
        if(allNotification){
            res.json({ message: 'Total notification',status:200 ,allNotification  }).status(201);
        }else {
            res.json({ message: ' No any New notification',status:200 }).status(201);
        }
    } catch (error) {
        res.send(error.message).status(500);
    }
}

const deletenotification = async (req, res)=>{
    const {id} = await req.params
    try {
        const deleteData = await EmergancyCall.findByIdAndDelete(id);
        // console.log(latestData);
        res.json({ message: 'notification deleted success',status:200  }).status(200);
    } catch (error) {
        res.send(error.message).status(500);
    }
}

module.exports = {postEmergancyCall ,getemergancynotification ,deletenotification ,getAllnotification}