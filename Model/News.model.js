
const mongoose = require("mongoose");

const News_model = new mongoose.Schema(
    {
        image : {
            type : String,
            required : true
        },
        News : {
            type : String,
            required : true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("News_Schema", News_model);

//image