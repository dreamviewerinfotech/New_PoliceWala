// // controllers/user.controller.js
// const CivilianModel = require("../Model/user.model");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// exports.registerCivilian = async (req, res) => {
//   const origin = req.headers.origin || "Unknown Origin";
//   const image = `${origin}/${req.file.path}`;

//   const {
//     password,
//     name,
//     dob,
//     gender,
//     address,
//     landmark,
//     state,
//     pincode,
//     city,
//     confirmPassword,
//     mobileno,
//     email,
//   } = req.body;

//   try {
//     // Check if the mobile number already exists in the database
//     const existingCivilian = await CivilianModel.findOne({ mobileno, email });

//     if (existingCivilian)
//       return res
//         .status(400)
//         .json({ error: "Mobile number and emailId already exists" });
//     else if (password != confirmPassword)
//       return res.status(400).json({ error: "Password doesn't match" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const civilianCreate = new CivilianModel({
//       mobileno: mobileno,
//       name: name,
//       dob: dob,
//       gender: gender,
//       email: email,
//       address: address,
//       state: state,
//       landmark: landmark,
//       street: state,
//       pincode: pincode,
//       city: city,
//       password: hashedPassword,
//       confirmPassword: hashedPassword,
//       image: image,
//     });

//     await civilianCreate.save();

//     let civilian = await CivilianModel.findOne({ mobileno }).select({
//       password: 0,
//       confirmPassword: 0,
//     });

//     const token = jwt.sign(
//       { id: civilianCreate._id, ...civilianCreate },
//       "121212WE",
//       {
//         expiresIn: "1h", // Set the expiration time for the token
//       }
//     );

//     res
//       .status(201)
//       .json({
//         message: "Civilian registered successfully",
//         accessToken: token,
//         civilian,
//       });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.loginCivilian = async (req, res) => {
//   try {
//     const { mobileno, password } = req.body;

//     // Find the user by mobile number
//     const civilian = await CivilianModel.findOne({ mobileno });

//     // Check if the user exists
//     if (!civilian) {
//       return res.status(404).json({ error: "Civilian not found" });
//     }

//     // Compare the provided password with the hashed password in the database
//     const passwordMatch = await bcrypt.compare(password, civilian.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ error: "Invalid password" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ id: civilian._id }, "121212WE", {
//       expiresIn: "1h", // Set the expiration time for the token
//     });

//     // Return the token in the response
//     res
//       .status(200)
//       .json({
//         success: true,
//         name: civilian.name,
//         mobileno: civilian.mobileno,
//         image: civilian.image,
//         accessToken: token,
//       });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.forgatePassword = async (req, res) => {};





const CivilianModel = require("../Model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerCivilian = async (req, res) => {
 
  try {
    const {
      password,
      confirmPassword,
      name,
      dob,
      gender,
      address,
      landmark,
      state,
      pincode,
      city,
      mobileno,
      Fcm_Token,
      email,
      street,
      image
    } = req.body;
  
    // Check if the mobile number already exists in the database
    const existingCivilian = await CivilianModel.findOne({ mobileno });
    if (existingCivilian) {
      return res.status(400).json({ error: "Mobile number already exists" });
    } else if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    // Ensure password and confirmPassword are defined
    if (!password || !confirmPassword) {
      return res.status(400).json({ error: "Password or confirmPassword is undefined" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const civilianCreate = new CivilianModel({
      mobileno: mobileno,
      name: name,
      dob: dob,
      gender: gender,
      email: email,
      address: address,
      state: state,
      landmark: landmark,
      street: street,
      pincode: pincode,
      city: city,
      Fcm_Token : Fcm_Token,
      password: hashedPassword,
      // confirmPassword: confirmPassword,
      image: image,
    });

    await civilianCreate.save();

   // Omit sensitive information from the response
    const civilian = await CivilianModel.findOne({ mobileno }).select({
      password: 0,
      confirmPassword: 0,
    });

    const token = jwt.sign(
      { id: civilianCreate._id },
      "121212WE",
      {
        expiresIn: "1h", // Set the expiration time for the token
      }
    );

    res.status(201).json({
      message: "Civilian registered successfully",
      accessToken: token,
      civilian,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.loginCivilian = async (req, res) => {
  try {
    const { mobileno, password } = req.body;

    // Find the user by mobile number
    const civilian = await CivilianModel.findOne({ mobileno });

    // Check if the user exists
    if (!civilian) {
      return res.status(404).json({ error: "Civilian not found" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, civilian.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: civilian._id }, "121212WE", {
      expiresIn: "1h", // Set the expiration time for the token
    });

    // Return the token in the response
    res
      .status(200)
      .json({
        success: true,
        name: civilian.name,
        mobileno: civilian.mobileno,
        image: civilian.image,
        accessToken: token,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.forgatePassword = async (req, res) => {};