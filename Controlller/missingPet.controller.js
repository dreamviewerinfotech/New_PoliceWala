




const PetModel = require ("./../Model/missingPet.model");



const reportOfMissingPet = async (req,res) => {
     
    try {

        const  {id} = await req?.civilian;

        const newPetReport = new PetModel({
            
            Pet_date: req.body.Pet_date,
            Pet_color: req.body.Pet_color,
            Pet_location: req.body.Pet_location,
            Pet_image: req.body.Pet_image,
            Pet_brand: req.body.Pet_brand,
            Pet_age: req.body.Pet_age,
            Pet_Ownername: req.body.Pet_Ownername,
            Pet_email: req.body.Pet_email,
            Pet_address: req.body.Pet_address,
            Pet_state: req.body.Pet_state,
            Pet_city: req.body.Pet_city,
            Pet_phonenumber: req.body.Pet_phonenumber,
            userId : id
        });

        if (!newPetReport.Pet_date ) {
            res.json({ message: "Please Fill All The Required Fields." }).status(400);
        } else {
            let newSavedPetReport = await newPetReport.save();
            res.json({ message: 'Pet Report Saved successfully', result : newSavedPetReport }).status(201);
        }
    } catch (error) {
        console.log('Error occurred in pet Report creation...', error.message);
        res.send(error.message).status(500);
    }
}
      
const getAllMissingPetReport = async (req, res) => {
    try {
        const missingPetComplaints = await PetModel.find();

        if (!missingPetComplaints) {
            return res.status(404).json({ message: "No MissingPet Reports found..." });

        } 
        else if (missingPetComplaints) {

            return res.json({ message: "missing Report for pets found...", result: missingPetComplaints  }).status(200);
        }

    } catch (error) {
        console.error('Error occurred in missingPet Report Get...', error.message);
        res.status(500).json({ error: "Internal Server Error" , message : error.message});
    }
}

const getMissingPetReportById = async (req, res) => {

    const enteredId = req.params.id;

    try {

        if(!enteredId) {
            res.send("Please enter a valid Id...").status(400);
        }

        const petReport = await PetModel.findOne({_id : enteredId});

        if (!petReport) {
            return res.json({ message: "Pet Report not found" }).status(404);
        }
        else {
            res.json({ message: "missing Report for PetReport found....", result: petReport}).status(200);
        }

       
    } catch (error) {
        console.error('Error occurred in petReport getById', error.message);
        res.status(500).json({ error: "Internal Server Error" , message : error.message });
    }
}

const updateMissingReport = async (req,res) => {
     
    const petReportId = req.params.id;
    const dataToBeUpdate = req.body;

    try {

      const updatedPetReport = await PetModel.findByIdAndUpdate(petReportId, dataToBeUpdate, {
        new: true,
      });

      if (!updatedPetReport) {
        return res.json({ message: 'petDetails not found' }).status(404);
      }
      else if (updatedPetReport) {
        res.json({ message : "pet report updated successfully..." , result : updatedPetReport}).status(200);
      }
      
    } catch (error) {
      res.json({ error: error.message }).status(500);
    }
}


const deletePetReport = async (req,res) => {

    const enteredId = req.params.id;

    try {

        if(!enteredId) {
            res.send("Please enter a valid Id...").status(400);
        }

        const PetReportToBeDelete = await PetModel.findOneAndDelete({_id : enteredId});

        if(PetReportToBeDelete) {
             res.send("Pet Report Deleted successfully...").status(201);
        } else {
            res.send("Pet Report Not Found...").status(400);
        }
    }
    catch (error) {
        console.error('Error occurred in Pet report delete', error.message);
        res.status(500).json({ error: "Internal Server Error" , message : error.message });
    }

}


module.exports = {deletePetReport,updateMissingReport,getMissingPetReportById,getAllMissingPetReport,reportOfMissingPet}