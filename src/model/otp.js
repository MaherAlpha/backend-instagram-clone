import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  otp: {
    type: "number",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});
const otpModel = mongoose.model("otps", otpSchema);

export default otpModel;
