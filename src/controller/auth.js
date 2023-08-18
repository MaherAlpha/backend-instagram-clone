import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authModel from '../model/auth.js'
import userModel from '../model/user.js';


const authController = {

    register: async (req, res) => {
        console.log("this is a post request")        
      return res.json({ message: "Register Successful! ", register });
    },
    login: async (req, res) => {
        console.log("this is a post request")        
      return res.json({ message: "login Successful! ", login });
    },
    forgotPassword: async (req, res) => {
        console.log("this is a post request")        
      return res.json({ message: "Password Updated! ", forgotPassword });
    }
    
  };
// implementing tokens

//checking passwords
userSchema.methods.matchPasswords = function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
  };
  // hashing and adding more security using salt
  userSchema.pre("save", async function (next) {
    if (!this.matchPasswords("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt);
  });

  
  export default authController;



