const mongoose = require("mongoose")
exports.ConnectDB = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/mern')
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`)
        mongoose.disconnect()
        process.exit(1)
    }
}