import mongoose from "mongoose";
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url, {
      connectTimeoutMS: 30000,
      socketTimeoutMS: 30000,
    });
    console.log("Connected to MongoDB");
    return mongoose.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDatabase;
