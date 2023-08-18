import mongoose from "mongoose";

const connectDB = async () => {
  const uri = "mongodb://127.0.0.1:27017/instagramApp";
  mongoose
    .connect(uri, {
      autoCreate: true,
      autoIndex: true,
    })
    .then((res) => {
      console.log("Connected db connection");
    })
    .catch((err) => {
      console.log("Error connecting db connection", err);
    });
};

export default connectDB;
