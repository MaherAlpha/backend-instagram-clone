import jwt from "jsonwebtoken";
function pathAuthenticated(req,res,next){
    try {
        const token = req.header.authorization;
        console.log(token);
        if(!token){
            return res.status(404).json({message:"token not found"})
        }
        const decoded=jwt.verify(token, process.env.SECRET_KEY,);
        req.user=decoded;
        console.log(decoded)
        next();
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Error while authenticating "})
    }
}

export default pathAuthenticated