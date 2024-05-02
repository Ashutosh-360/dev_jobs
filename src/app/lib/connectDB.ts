import mongoose from "mongoose";

export async function connectDb() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
}
