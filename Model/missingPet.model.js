const mongoose = require("mongoose");

const Pet_Schema = new mongoose.Schema(
    {
        Pet_date:  {
        type: String,
        trim: true,
        required: true,
      },
      Pet_MissingLocation : {
        type: String,
      },
        Pet_color:  {
        type: String,
        trim: true,
      },
        Pet_image:  {
        type: String,
        required: true,
      },
        Pet_Breed:  {
        type: String,
      },
        Pet_Ownername:  {
        type: String,
        trim: true,
        required: true,
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