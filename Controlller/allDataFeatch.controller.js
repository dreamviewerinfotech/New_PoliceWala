const FoundBagModel = require("../Model/foundBag.model")
const FoundHumanModel = require("../Model/foundHuman.model")
const FoundOtherModel = require("../Model/foundOther.model")
const FoundPetModel = require("../Model/foundPet.model")
const FoundVehicleModel = require("../Model/foundVehicle.model")
const FoundMobileModel = require("../Model/foundMobile.model")
const MissingBagModel = require("../Model/missingBag.model")
const MissingHumanModel = require("../Model/missingHuman.model")
const MissingOtherModel = require("../Model/missingOther.model")
const MissingVehicleModel =require("../Model/missingVehicle.model")



exports.allComplaints = async(req, res) => {
      
        try{


   const FoundBag = await FoundBagModel.find({}).sort({_id: -1}).limit(2)
    const FoundHuman  = await FoundHumanModel.find({}).sort({_id: -1}).limit(2)
    const FoundOther = await FoundOtherModel.find({}).sort({_id: -1}).limit(2)
    const  FoundPet  = await  FoundPetModel.find({}).sort({_id: -1}).limit(2)
   const FoundVehicle = await FoundVehicleModel.find({}).sort({_id: -1}).limit(2)
   const FoundMobile = await FoundMobileModel.find({}).sort({_id: -1}).limit(2)
   const MissingBag = await MissingBagModel.find({}).sort({_id: -1}).limit(2)
    const MissingHuman = await MissingHumanModel.find({}).sort({_id: -1}).limit(2)
   const MissingOther  = await MissingOtherModel.find({}).sort({_id: -1}).limit(2)
   const MissingVehicle = await MissingVehicleModel.find({}).sort({_id: -1}).limit(2)

   const allComplaints = [...FoundBag, ...FoundHuman, ...FoundOther,
                      ...FoundPet,  ...FoundVehicle, ...FoundMobile, ...MissingBag,
                       ... MissingHuman, ...MissingOther, ...MissingVehicle]
                    
      
                       res.status(200).json({success: true , allComplaints})

       }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }
   
}