const mongoose = require("mongoose");

const EmergancyCallSchema = new mongoose.Schema(
    {
        userId :{type:String },
        mynearbyLocation:{type:String,default:"User location"},
        longitude :{type:String,required:true},
        latitude:{type:String,required:true},
        // timestamp:{type:Date}
    },
    { timestamps: true }
);

module.exports = mongoose.model("EmergancyCall", EmergancyCallSchema);