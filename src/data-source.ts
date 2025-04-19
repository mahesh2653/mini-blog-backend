import mongoose from "mongoose";
const url = process.env.MONGO_URL || "mongodb://localhost:27017/mydatabase";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
    return mongoose.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDatabase;
