import mongoose from "mongoose";


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
};

const connectDB = async () => {
    mongoose.set('strictQuery', false);

    const { MONGODB_URI } = process.env;
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


