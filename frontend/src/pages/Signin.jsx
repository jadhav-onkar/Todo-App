import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signin(){
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const navigate = useNavigate()

     const userSignin = async (e)=>{
        e.preventDefault()

        if(!email || !password){
            alert("fill info first")
            return
        }
        try{
            const res = await axios.post("http://localhost:3000/api/v1/signin",{
                email,
                password
            })
            const token = res.data.token
            localStorage.setItem("authToken", token)
            alert("sign in succesfully")
            navigate("/home")
        }
        catch(e){
            console.log(e)
        }
     }

    return(
        <div>
            <p>Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="abc@gmail.com" />

            <p>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="test123" />

            <button onClick={userSignin}>Sign in</button>
            <p>if not have account? <button onClick={()=>navigate('/signup')}>sign up</button></p>
        </div>
    )
}