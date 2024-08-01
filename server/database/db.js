import mongoose from "mongoose";

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("mongodb connected successfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// server/database/db.js

const ConnectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
};

export default ConnectToDatabase;
