import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Signup(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const userSignUp = async (e)=>{
        e.preventDefault()
        if(!username || !email || !password){
            alert("fill info first")
            return
        }

        try{
            const res = await axios.post("http://localhost:3000/api/v1/signup",{
                username,
                email,
                password
            })
            alert("sign up succesfully")
            navigate('/signin')
        }
        catch(e){
            alert(e.response.data.msg) 
        }
    }

    return(
        <div className="h-screen flex justify-center bg-gray-100 items-center">
            <div className="border border-gray-300 bg-white p-10 flex flex-col rounded-3xl">
                <h1 className="text-3xl font-Ubuntu font-bold mx-auto mb-5">Sign Up</h1>

                <p className="font-bold mb-2">Username</p>
                <input className="border border-gray-400 p-2 mb-5 rounded-lg" onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username" />

                <p className="font-bold mb-2">Email</p>
                <input className="border border-gray-400 p-2 mb-5 rounded-lg" onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="abc@gmail.com" />

                <p className="font-bold mb-2">Password</p>
                <input className="border border-gray-400 p-2 mb-4 rounded-lg" onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="pass123" /> 
                <button className="bg-black hover:bg-gray-600 text-white p-2 rounded-lg" onClick={userSignUp}>Sign up</button>
                <p className="mt-2">if already have account? <button className="hover:text-gray-500 underline" onClick={()=>navigate('/signin')}>sign in</button></p>
            </div>
        </div>
    )
}