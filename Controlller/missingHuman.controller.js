





const MissingHuman = require("../Model/missingHuman.model"); 



const missingHumanReport = async (req, res) => {

        // const origin = req.headers.origin || 'Unknown Origin';
        // const Human_image = `${origin}/${req.file.path}`;
        //image
    try {

      const  {id} = await req?.civilian;

        const missingHumanData = {
            Human_relativename: req.body.Human_relativename,
            Human_name: req.body.Human_name,
            Human_phoneNumber: req.body.Human_phoneNumber,
            Human_missingNumber: req.body.Human_missingNumber,
            Human_date: req.body.Human_date,
            Human_color: req.body.Human_color,
            Human_location: req.body.Human_location,
            Human_age: req.body.Human_age,
            Human_height: req.body.Human_height,
            Human_gender: req.body.Human_gender,
            Human_address: req.body.Human_address,
            Human_weight: req.body.Human_weight,
            Human_aadharcard: req.body.Human_aadharcard,
            Human_email: req.body.Human_email,
            Human_city: req.body.Human_city,
            Human_state: req.body.Human_state,
            Human_pincode: req.body.Human_pincode,
            Human_image:req.body.Human_image,
            userId : id
        };
        

        // Save missing human data to MongoDB
        const missingHuman = new MissingHuman(missingHumanData);
        await missingHuman.save();

        res.status(201).json({ message: "Missing human data saved successfully", status: 201 });
    } catch (error) {
        console.error("Error saving missing human data:", error);
        res.status(500).json({ error: "Failed to save missing human data", err: error });
    }
}

async function allMissingHumans (req, res) {
    try {
      const missingHumans = await MissingHuman.find();
      res.json(missingHumans).status(200);

    } catch (error) {
      console.log(error.message);
      res.json({ error: error.message }).status(500);
    }
  };


module.exports = {missingHumanReport,allMissingHumans}