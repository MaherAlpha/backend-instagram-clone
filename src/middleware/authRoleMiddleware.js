import userModel from "../model/user.js";

const pathAuthorization=(role)=>async(req,res,next)=>{
    try {
        const role = userModel.find({role});
        console.log(role);
        if(!role || role===-1) return res.status(403).json(message,"Forbidden!");
        return res.status(200).json({message:"Admin Authenticated", role})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Error while authorization "})
        next(error);
    }
}
// still needs to be tested
export default pathAuthorization