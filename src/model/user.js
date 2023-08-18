import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email:{
    type: "string",
    required: true,
  }
},  {timestamps:true});

const userModel = mongoose.model("users", userSchema);

export default userModel;

//Muhammad is cute!!!