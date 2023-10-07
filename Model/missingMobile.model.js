const mongoose = require("mongoose");

const missingMobile_Schema = new mongoose.Schema(
    {
        Mobile_date: {type: Date, default: Date.now()},
        userId: {type: String},
        Mobile_color: {type: String},
        Mobile_location: {type: String},
        Mobile_image: {type: String},
        Mobile_brand: {type: String},
        Mobile_number: {type: String},
        Mobile_hounorname: {type: String},
        Mobile_emi1number:{type: String},
        Mobile_emi2number: {type: String},
        Mobile_address: {type: String},
        Mobile_city: {type: String},
        Mobile_state: {type: String},
        Mobile_pincode: {type: String},
        Mobile_name: {type: String},
        Mobile_phonenumber: {type: String},
        Mobile_aadharcard: {type: String},
        Mobile_email: {type: String},
    },
    { timestamps: true }
);

module.exports = mongoose.model("MissingMobile", missingMobile_Schema);