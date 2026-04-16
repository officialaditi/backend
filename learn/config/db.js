import mongoose from "mongoose";
import color from 'colors'


const connectDB = async () => {
        try {
                const conn = await mongoose.connect(process.env.MONGODB_URL);
                console.log(`MongoDB connected successfully ${conn.connection.host}`.cyan.bold.underline);
        } catch (error) {
                console.error(`Error: ${error.message}`.bgRed);
                process.exit(1); // this is an bad exist (error exit);
        }
}
export default connectDB;