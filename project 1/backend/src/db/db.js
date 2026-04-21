const mongoose = require("mongoose")

async function DbConnect() {
    await mongoose.connect(process.env.DB_URI)
    console.log("DB Connected")
    
}

module.exports = DbConnect;