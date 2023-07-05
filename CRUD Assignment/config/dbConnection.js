const mongoose = require("mongoose");

const connectToDatabase=async()=>{mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log("Database Connected Successfully")
}).catch((err)=>{
    console.log("Error While Connecting to DB",err.message)
})}

module.exports ={connectToDatabase};