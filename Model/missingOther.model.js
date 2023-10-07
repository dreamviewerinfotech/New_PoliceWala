const mongoose = require("mongoose");

const missingOther_Schema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        Other_date: {
            type: String,
            required: true
        },
        other_Place: {
            type: String,
            required: false
        },
        other_Name: {
            type: String,
            required: false
        },
        lastseen: {
            type: Date,
            required: false
        },
        other_image: {
            type: String,
            required: true
        },
        userId : {
            type : String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("MissingOther", missingOther_Schema);

//image