const User = require("../../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../../services/sendEmail");

exports.registerUser = async (req, res) => {
  // console.log(req.body)
  const { email, password, phoneNumber, username } = req.body;
  if (!email || !phoneNumber || !password || !username) {
    return res.status(400).json({
      message: "Please provide every details.",
    });
  }

  //check if email already exists
  const userFound = await User.find({ userEmail: email });
  if (userFound.length > 0) {
    return res.status(400).json({
      message: "User already exists with that email.",
    });
  }

  await User.create({
    userName: username,
    userPhoneNumber: phoneNumber,
    userEmail: email,
    userPassword: bcrypt.hashSync(password, 10),
  });

  res.status(201).json({
    message: "User registered successfully",
  });
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide all details",
    });
  }
  //check if email user exists or not
  const userFound = await User.find({ userEmail: email });
  if (userFound.length == 0) {
    return res.status(404).json({
      message: "Invalid credentials.",
    });
  }

  //if email found
  //pass check
  const isMatched = bcrypt.compareSync(password, userFound[0].userPassword);
  if (isMatched) {
    //generate token
    const token = jwt.sign({ id: userFound[0]._id }, process.env.SECRET_KEY);

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } else {
    res.status(404).json({
      message: "Invalid credentials.",
    });
  }
};
// forgot password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "Please provide email",
    });
  }

  //check if email exists
  const userExist = await User.find({ userEmail: email });
  if (userExist.length == 0) {
    return res.status(404).json({
      message: "Email is not registered",
    });
  }
  //send otp to that email
  const otp = Math.floor(Math.random() * 10000);
  userExist[0].otp=otp
  await userExist[0].save()
  await sendEmail({
    email: email,
    subject: "Your OTP for Sdickers",
    message: `Your OTP for Sdickers is ${otp}`
  })
  res.status(200).json({
    message: "OTP sent"
  })
}
//verify otp
exports.verifyOtp = async (req,res)=>{
  const {email,otp}=req.body
  if(!email || !otp){
    return res.status(400).json({
      message:"Please provide both email and otp"
    })
  }

  //check if otp is correct
  const userExists = await User.find({userEmail:email})
  if(userExists.length==0){
    return res.status(404).json({
      message:"Email isnot registered"
    })
  }

  if(String(userExists[0].otp) !== String(otp)){
    res.status(400).json({
      message:"Invalid otp"
    })
  }else{
    //dispost the otp so it cannot be used again
    userExists[0].otp=undefined
    userExists[0].isOtpVerified = true;
    await userExists[0].save()
  res.status(200).json({
    message:"Otp is correct"
  })
}
}

exports.resetPassword = async (req,res)=>{
  const {email,newPassword,confirmPassword}=req.body
  if(!email || !newPassword || !confirmPassword){
    return res.status(400).json({
      message:"Please fill the fields"
    })
  }
  if(newPassword !== confirmPassword){
    return res.status(400).json({
      message:"Passwords didnot match"
    })
  }
  const userExists = await User.find({userEmail:email})
  if(userExists.length==0){
    return res.status(404).json({
      message:"User isnot registered"
    })
  }

  if(userExists[0].isOtpVerified !== true){
    return res.status(403).json({
      message:"You cannot perform this action"
    })
  }

  userExists[0].userPassword= bcrypt.hashSync(newPassword,10)
  userExists[0].isOtpVerified = false;
  await userExists[0].save()
  res.status(200).json({
    message:"Password changed successfully."
  })
}

exports.logoutUser = async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    message: "User logged out successfully",
  });
};