import mongoose from "mongoose";


const connectDB = async () => {

  const uri =  process.env.MONGOOSE_DB_URL;

  try {
    await mongoose.connect(uri, {
      autoCreate: true,
      autoIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    });
    console.log("Connected db connection");
  } catch (err) {
    console.error("Error connecting db connection", err);
  }
};

export default connectDB;
