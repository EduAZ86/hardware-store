import mongoose from "mongoose";

mongoose.set("strictQuery", false)

const { MONGODB_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
};

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URI as string, options)
        if (connection.readyState === 1) {
            console.log("Database connected")
            return Promise.resolve(true)
        }
    } catch (error) {
        console.log(error);
        return Promise.reject(false)
    }
}

export default connectDB


