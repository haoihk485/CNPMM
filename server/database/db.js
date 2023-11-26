import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async (username, password) => {

    const url = `mongodb+srv://${username}:${password}@blogcnpmm.gdq3h8d.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url, {});
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};
export default connectDB