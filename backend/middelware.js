import jwt from 'jsonwebtoken'
import dotenv, { config } from 'dotenv'
dotenv.config()

export default function authmiddleware(req,res,next){
    let token = req.headers.authorization
    if(!token || !token.startsWith("Bearer")){
        res.status(500).json({
            msg:"unothrized user"
        })
    }
    
    token = token.split(" ")[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRETE)
        req.userID = decoded.userId
        console.log(decoded.userId)
        next()
    }
    catch(e){
        res.status(500).json({
            msg:"unothrized user"
        })
    }
}