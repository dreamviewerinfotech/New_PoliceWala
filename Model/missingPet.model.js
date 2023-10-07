const mongoose = require("mongoose");

const Pet_Schema = new mongoose.Schema(
    {
        Pet_date:  {
        type: String,
        trim: true,
        required: true,
      },
        Pet_color:  {
        type: String,
        trim: true,
      },
        Pet_location:  {
        type: String,
        trim: true,
        required: true,
      },
        Pet_image:  {
        type: String,
        required: true,
      },
        Pet_brand:  {
        type: String,
      },
        Pet_age:  {
        type: String,
        trim: true,
      },
        Pet_Ownername:  {
        type: String,
        trim: true,
        required: true,
      },
        Pet_email:  {
        type: String,
        trim: true,
        required: true,
      },
        Pet_address:  {
        type: String,
        trim: true,
      },
        Pet_state:  {
        type: String,
        trim: true,
      },
        Pet_city:  {
        type: String,
        trim: true,
      },
        Pet_phonenumber:  {
        type: String,
        trim: true,
      },
      userId : {
        type : String
      }
    },
    { timestamps: true }
);

module.exports = mongoose.model("MissingPet", Pet_Schema);