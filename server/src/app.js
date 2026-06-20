const express = require("express");
require("dotenv").config();
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { connectDatabase } = require("./database/database");
connectDatabase();
const User = require("./model/userModel");

//register user api
app.post("/register",async (req, res) => {
  // console.log(req.body)
  const { email, password, phoneNumber, username } = req.body;
  if (!email || !phoneNumber || !password || !username) {
    return res.status(400).json({
      message: "Please provide every details.",
    });
  }

    //check if email already exists
    const userFound = await User.find({userEmail:email})
    if(userFound.length>0){
      return res.status(400).json({
        message:"User already exists with that email."
      })
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
  
});


//login api
app.post("/login", async (req, res)=>{
  const {email,password}=req.body
  if(!email || !password){
    return res.status(400).json({
      message:"Please provide all details"
    })
  }
  //check if email user exists or not
  const userFound=await User.find({userEmail:email})
  if(userFound.length==0){
    return res.status(404).json({
      message:"Invalid credentials."
    })
  }

  //if email found
  //pass check
  const isMatched = bcrypt.compareSync(password, userFound[0].userPassword)
  if(isMatched){

    //generate token
    const token = jwt.sign({id:userFound[0]._id}, 
      process.env.SECRET_KEY
    )




    res.status(200).json({
      message:"User logged in successfully",
      token
    })
  }else{
    res.status(404).json({
      message:"Invalid credentials."
    })
  }
})


const PORT = process.env.PORT;
const startServer = async () => {
  try {
    await connectDatabase(); // WAIT for DB connection

    app.listen(PORT, () => {
      console.log("Server started at PORT = " + PORT);
    });
  } catch (err) {
    console.log("DB Connection failed:", err);
  }
};

startServer();
