import Transport from "../../config/nodemailer.js"


const loginEmail=(name,email)=>{
    //working [Checked]
    // console.log(email,"email");
    // console.log(name,"name");
    Transport.sendMail({ 
        from: "muhammad.maher9999@gmail.com",
        to:`${email}` ,
        subject:"Tags Sigmas Mehfil ",
        html:`<h1 stye={{background-color:#ADD8E6},{font-size:28px}}>Welcome to the world of Master Minds Sigmas ${name}. Hey Brilliant, you have show your best!</h1>`
    },
    (error, res)=>{
        if(error) console.log(error);
        else console.log("Mail Send Successfully!",res.messageId);
    });

};

export default loginEmail;
//user logged in name with email
//subject welcome
// call back function