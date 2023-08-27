import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config();
// const host=process.env.HOST;
// const post=process.env.NODEMAILER_PORT;
// const user=process.env.NODEMAILER_AUTH_USER;
// const pass=process.env.NODEMAILER_AUTH_PASSWORD;

// console.log(process.env.HOST)
// console.log(process.env.NODEMAILER_PORT)
// console.log(process.env.NODEMAILER_AUTH_USER)
// console.log(process.env.NODEMAILER_AUTH_PASSWORD)

let Transport = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.NODEMAILER_PORT,
    secure:false,
    logger:true,
    debug:true,
    auth: {
      user:process.env.NODEMAILER_AUTH_USER,
      pass: process.env.NODEMAILER_AUTH_PASSWORD
    }
  });

 
  export default Transport; 