const MissingMobile = require("../Model/missingMobile.model")


exports.createMissingMobile = async (req, res) => {
    try{
        const {_id} = await req.civilian
        const createMobile = new MissingMobile({...req.body ,userId : _id});
        await createMobile.save();
        res.json({ message: 'MissingMobile  saved successfully', status:200, createMobile}).status(201);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

}

exports.getMissingMobileById = async (req, res) => {

    try{
        const {mobileId}  = await req.params
        const missingMobile = await MissingMobile.findById(mobileId)
        if(missingMobile){
            res.json({success: true,  message: "MissingMobile find success", missingMobile}).status(200);
        }else{
            res.status(500).json({success: true,  error: "MissingMobile id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.getMissingAllMobile = async (req, res) => {

    try{
     
        const missingMobile = await MissingMobile.find();
        res.json({ message: "MissingMobile found", missingMobile}).status(200);

    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.updateMissingMobileById= async (req, res) => {

    try{
        const {mobileId}  = await req.params
        const missingMobile = await MissingMobile.findByIdAndUpdate({_id: mobileId}, {$set:{...req.body}})
        if(missingMobile){
            res.json({success: true,  message: "MissingMobile update successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "MissingMobile id not found" });
        }


    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}

exports.deleteMissingMobileById= async (req, res) => {

    try{
        const {mobileId}  = await req.params
        const missingMobile = await MissingMobile.findByIdAndDelete(mobileId)
        if(missingMobile){
            res.json({success: true,  message: "MissingMobile delete successfully"}).status(200);
        }else{
            res.status(500).json({success: true,  error: "MissingMobile id not found" });
        }
    }catch (error) {
        return res.status(500).json({success: false, error: error.message });
      }

    
}