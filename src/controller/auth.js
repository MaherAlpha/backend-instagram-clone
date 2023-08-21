import userModel from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const authController = {
  register: async (req, res) => {
    try {
      const user = new userModel({
        name:req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
      });
      //console.log(user);
      user.save();
      return res.json({ message: "Register Successful! ", user });
    } catch (error) {
     console.log(error);
     return res.status(500).json({error:"Error while registering!"}); 
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      // Check if the user exists
      const user = await userModel.findOne({ email });
      if (user==undefined) {
        return res.status(404).json({ message: "User not found." });
      }
      // Compare the provided password with the stored hash
      const passwordIsValid = bcrypt.compare(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).json({ message: "Invalid credentials." });
      }
      // Create a JWT token
      ;
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: 86400,
        
        // 24 hours in seconds
      });
   
      return res.status(200).json({
        message:"User Successfully Logged In!",
        accessToken: token,
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "An error occurred while logging in."});
    }
  },
  // forgotPassword: async (req, res) => {
  //     console.log("this is a post request")
  //   return res.json({ message: "Password Updated! ", forgotPassword });
  // }
};
// implementing tokens

//checking passwords
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
