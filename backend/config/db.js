import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
	try {
		let mongoUri=ENV_VARS.MONGO_URI
		await mongoose.connect(String(mongoUri));
		console.log("MongoDB connected successfully!");
	} catch (error) {
		console.error("Error connecting to MONGODB: " + error.message);
		process.exit(1);
	}
};

export default connectDB;