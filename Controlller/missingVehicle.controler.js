

const missingVehicle = require("../Model/missingVehicle.model");



async function reportMissingVehicle (req,res) {
     
    // const origin = req.headers.origin || 'Unknown Origin';

    const {
        Vehicle_name,
        Vehicle_date,
        Vehicle_color,
        Vehicle_location,
        Vehicle_brand,
        Vehicle_Station,
        Vehilce_model,
        Vehicle_address,
        Vehicle_hounarname,
        Vehicle_email,
        Vehicle_number,
        Vehicle_phoneNumber,
        Vehicle_state,
        Vehcile_City,
        Vehicle_bodynumber,
        Vehicle_enginenumber,
        Vehicle_aadharcard,
        Vehicle_pincode,
        Vehicle_type,
        Vehicle_image
    } = req.body;

    // const Vehicle_image = `${origin}/${req.file.path}`;
    // const Vehicle_image = `${req.file.path}`;
    //image
    try{
      const  { id} = await req?.civilian;

        if(!req.body) {
            res.send("Please fill all the details of vehicle...").status(400)
        }

        const newMissingVehicle = new missingVehicle({
            Vehicle_name,
            Vehicle_date,
            Vehicle_color,
            Vehicle_location,
            Vehicle_brand,
            Vehicle_Station,
            Vehilce_model,
            Vehicle_address,
            Vehicle_hounarname,
            Vehicle_email,
            Vehicle_number,
            Vehicle_phoneNumber,
            Vehicle_state,
            Vehcile_City,
            Vehicle_bodynumber,
            Vehicle_enginenumber,
            Vehicle_aadharcard,
            Vehicle_pincode,
            Vehicle_type,
            Vehicle_image,
            userId : id
          });
    
          const savedMissingVehicle = await newMissingVehicle.save();

          res.status(201).json({ message: 'Complaint about missing vehicle saved successfully', result: savedMissingVehicle });

    } catch (error) {
        console.log('Error occured while saving data...', error.message);
        res.json({message : error.message}).status(500)
    }

    

} 
async function allMissingVehicles (req, res) {
    try {
      const missingVehicles = await missingVehicle.find();
      res.json(missingVehicles).status(200);

    } catch (error) {
      console.log(error.message);
      res.json({ error: error.message }).status(500);
    }
  };

async function missingVehicleById (req, res) {

    const vehicleId = req.params.id;
    try {

        if(!vehicleId) {
            res.json({message : "Please Provide Id to fetch the data..."})
        }
        else if(vehicleId) {
            const vehicle = await missingVehicle.findById(vehicleId);
            if (!vehicle) {
                return res.json({ message: 'Vehicle details not found' }).status(404);
              }
              res.json(vehicle).status(200);
        }
      
    } catch (error) {
      res.json({ error: error.message }).status(500);
    }
  }

 async function updateVehicleDetails (req, res) {

  const vehicleId = req.params.id;
  const dataToBeUpdate = req.body;

    try {

      const updatedVehicle = await missingVehicle.findByIdAndUpdate(vehicleId, dataToBeUpdate, {
        new: true,
      });

      if (!updatedVehicle) {
        return res.json({ message: 'Vehicle details not found' }).status(404);
      }
      else if (updatedVehicle) {
        res.json(updatedVehicle).status(200);
      }
      
    } catch (error) {
      res.json({ error: error.message }).status(500);
    }
  }


async function deleteVehicleComplaint (req, res) {

  const vehicleId = req.params.id;

    try {

      const deletedVehicle = await missingVehicle.findByIdAndRemove(vehicleId);

      if (!deletedVehicle) {
        return res.json({ message: 'Vehicle data not found' }).status(404);
      }

      else if(deletedVehicle) {
        res.send("Vehicle Details Removed Successfully...").status(204);
      }
      
    } catch (error) {
      res.json({ error: error.message }).status(500);
    }
  };

module.exports = {reportMissingVehicle,allMissingVehicles,missingVehicleById,updateVehicleDetails,deleteVehicleComplaint}