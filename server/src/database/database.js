const mongoose = require("mongoose")
// require("dotenv").config()
exports.connectDatabase = async()=>{
    //wait till it connects to database
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully")
    }catch(error){
        console.log("Database connection error:", error);
        process.exit(1);
    }
}

// module.exports=connectDatabase