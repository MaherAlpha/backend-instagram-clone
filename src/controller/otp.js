import otpModel from "../model/otp.js"
import dotenv from "dotenv";
import Transport from "../config/nodemailer.js";
dotenv.config();

const authController = {
  generate: async (req, res) => {
    try {
      const otp = new otpModel({
        otp:Math.floor(1000 + Math.random() * 9000),
        email: req.body.email,
      });
      console.log(otp);
      otp.save();
      return res.status(200).json({ message: "Otp Successfully Generated! ", otp });
    } catch (error) {
     console.log(error);
     return res.status(500).json({error:"Error while generating otp!"}); 
    }
  },
  verifyOtp: async (req, res) => {
    try {
        const email=req.body.email;
        const otp = await otpModel.findOne({ email });
        if(!otp){
            return res.status(400).json("Email Not Found!");
        }else if(otp){
            (email)=>{
                Transport.sendMail({ 
                    from: "muhammad.maher9999@gmail.com",
                    to:`${email}` ,
                    subject:"OTP-Sigmas Mehfil ",
                    html:`<h1 stye={{background-color:#ADD8E6},{font-size:28px}}>Welcome to the world of Master Minds Sigmas. Hey Brilliant, you have show your best! 
                        Here's your OTP ${otp.otp}
                        Please Verify and Set Foot in the World of Sigma</h1>`
                },
                (error, res)=>{
                    if(error) console.log(error);
                    else console.log("Mail Send Successfully!",res.messageId);
                });
            };
        }else{

        }
        const received_otp=req.params.otp;
        (received_otp)=>{
          if(received_otp===otp.otp){
            return res.status(200).json({message:"OTP Verified!"})
          }else{
            return res.status(400).json({message:"OTP Expired"})
          }
        }
      return res.status(200).json({ message: "Otp Verified "});
    } catch (error) {
     console.log(error);
     return res.status(500).json({error:"Error while verifying otp!"}); 
    }
  },
};
//email otp 5min purana -> verify ka function
// implementing tokens

//verify otp
// authSchema.methods.matchPasswords = function (enteredPassword) {
//     return bcrypt.compare(enteredPassword, this.password);
//   };
//   // hashing and adding more security using salt
//   userSchema.pre("save", async function (next) {
//     if (!this.matchPasswords("password")) {
//       next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = bcrypt.hash(this.password, salt);
//   });

export default authController;
