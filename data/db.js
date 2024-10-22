import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect( process.env.MONGO_URI,{
            dbName:"clarity-db"
        });
    } catch (error) {
        console.log("Failed to connect to database..." , error.message);
    }
}

export default connectDB;