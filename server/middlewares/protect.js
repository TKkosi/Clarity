import user from "../models/userModel.js"


const protect =async(req,res, next)=>{
    try
    {
        const token = req.cookies.token;
        if(!token)
        {
            return res.status(401).json({message:"Not authorized to access this route"});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const currentUser=await user.findById(decoded.id).select("-password");
        if(!currentUser)
        {
            return res.status(401).json({message:"User not found"});
        }
        req.user=currentUser;
        next();
    }
}

export default protect;