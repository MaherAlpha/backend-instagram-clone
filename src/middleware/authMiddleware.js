import jwt from "jsonwebtoken";
function pathAuthenticated(req,res,next){
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(404).json({message:"token not found!, Re-try"})
        }
        let modifiedToken= token.replace("Bearer ","");
        const decoded=jwt.verify(modifiedToken, process.env.SECRET_KEY);
        req.user=decoded;
        console.log(decoded)
        next();
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Error while authenticating "})
    }
}
export default pathAuthenticated