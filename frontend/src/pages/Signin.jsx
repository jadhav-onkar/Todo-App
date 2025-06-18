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
        <div className="h-screen flex justify-center bg-gray-100 items-center">
            <div className="border border-gray-300 bg-white p-10 flex flex-col rounded-3xl">
                <h1 className="text-3xl font-Ubuntu font-bold mx-auto mb-5">Sign In</h1>
                <p className="font-bold mb-2">Email</p>
                <input className="border border-gray-400 p-2 mb-5 rounded-lg" onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="abc@gmail.com" />

                <p className="font-bold mb-2">Password</p>
                <input className="border border-gray-400 p-2 mb-4 rounded-lg" onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="test123" />

                <button className="bg-black hover:bg-gray-600 text-white p-2 rounded-lg" onClick={userSignin}>Sign in</button>
                <p className="mt-2">If not have account? <button className="hover:text-gray-500 underline" onClick={()=>navigate('/signup')}>sign up</button></p>
            </div>
        </div>
    )
}