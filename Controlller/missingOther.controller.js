

const missingOther = require("../Model/missingOther.model");



const createOther = async (req,res) => {

    // const origin = req.headers.origin || 'Unknown Origin';

    // const other_image = `${origin}/${req.file.path}` ;
    // const other_image = `${req.file.path}` ;
    //image

    try{

        const  { id} = await req?.civilian;
        
        const newOtherMissing = new missingOther({
            description : req.body.description,
            Other_date : req.body.Other_date,
            other_Place : req.body.other_Place,
            other_Name : req.body.other_Name,
            lastseen : req.body.lastseen,
            other_image : req.body.other_image,
            userId : id
          });

          if(!newOtherMissing.description) {
              res.json({message : "Please Fill All The Required Fields For Successfully register a complaint..."}).status(404);  
          }
          else if(newOtherMissing) {
             let newComplaint = await newOtherMissing.save();
             res.json({message: 'Complaint about missing Other saved successfully', result: newComplaint}).status(201);
          }

    } catch(error) {
        console.log('Error occured while saving data in missing-Other field...', error.message);
        res.send(error.message).status(500);
    }
}

const getAllMissingReportInOtherCategory = async(req,res) => {
     
    try {

         let allComplaints = await missingOther.find();
         
         if(!allComplaints) {
             res.json({message : "No Complaints Found..."}).status(201);
         } else {
             res.json({message : "Data Found..." , result : allComplaints})
         }
    } catch(error){
         console.log(error.message);
         res.send(error.message).status(500);
    }
}

const getComplaintsOfOtherById = async (req,res) => {
     
     let EnteredId = req.params.id;

     try {

        if(!EnteredId) {
            res.json({message : "please provide a valid Id for fetching complaints..."}).status(404);
        }

        else if(EnteredId) {
            const complaint = await missingOther.findById({_id : EnteredId});

            if(complaint) {
                  res.json({message : "Data fetched successfully..." , result : complaint}).status(201);
            } else {
                  res.send("Data Not Found Against Entered Id...").status(404);
            }
        }
     } catch(error){
        console.log(error.message);
        res.send(error.message).status(500);
   }
}

const updateDetailsForOther = async (req,res) => {
     
    let EnteredId = req.params.id;
    let dataToBeUpdate = req.body;

    try {

        if (!EnteredId) {
            res.json({message : "please provide a valid Id for delete complaint..."}).status(400);
       }
     
        let updatedData = await missingOther.findByIdAndUpdate(EnteredId,dataToBeUpdate,{ new: true});

        if(updatedData) {
            res.json({message : "Your Entered Data Updated Successfully...." , result : updatedData}).status(200);

        } else {
            res.send("Data not found for updation...").status(404);
        }
      }  
      catch(error){
        console.log(error.message);
        res.send(error.message).status(500);
   }

}

const deleteOther = async (req,res) => {
     
    let EnteredId = req.params.id;

    try {

        if (!EnteredId) {
             res.json({message : "please provide a valid Id for delete complaint..."}).status(400);
        }
     
        const deletedOne = await missingOther.findByIdAndDelete({_id : EnteredId});

        if(deletedOne) {
             res.json({message : "Data Removed Successfully..."}).status(201);
        } else {
            res.json({message : "No Data Found..."}).status(404);
        }
    }
    catch(error) {
        console.log(error.message);
        res.send(error.message).status(500);
   }
}

module.exports = {createOther,getAllMissingReportInOtherCategory,getComplaintsOfOtherById,updateDetailsForOther,deleteOther}


