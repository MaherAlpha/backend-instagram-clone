import mongoose from "mongoose";


const connectDB = async () => {
  const mongooseUrl=process.env.MONGOOSE_DB_URL
  const uri = mongooseUrl;
  mongoose
    .connect(uri, {
      autoCreate: true,
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("Connected db connection");
    })
    .catch((err) => {
      console.log("Error connecting db connection", err);
    });
};

export default connectDB;
