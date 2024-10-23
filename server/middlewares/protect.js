import user from "../models/UserModel.js"
import jwt from "jsonwebtoken";



const protect =async(req,res, next)=>{
    let token;
    
    // Check for Bearer token in the Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }        
    if(!token){
        return res.status(401).json({message:"Not authorized, no token"});
    }
    
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const currentUser=await user.findById(decoded.id).select("-password");
        if(!currentUser)
        {
            return res.status(401).json({message:"User not found"});
        }
        req.user=currentUser;
        next();
    }catch(error){
        return res.status(401).json({message:"Not authorized, token failed"});
    }
}

export default protect;