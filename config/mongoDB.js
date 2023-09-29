import mongoose from "mongoose";
import { MONGO_DATABASE_URL } from "./envVariable.js";

mongoose.set('strictQuery', true);

const connnectDB = async () => {
    try {
        const con = await mongoose.connect(MONGO_DATABASE_URL, { retryWrites: true, w: 'majority' });
        console.log(`Mongodb connected!!`);
    } catch (error) {
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
};

export default connnectDB;