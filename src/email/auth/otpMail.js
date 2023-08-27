import Transport from "../../config/nodemailer.js"


function otpMmail(email){
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

export default otpMmail;
