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
            const res = await axios.post(`${import.meta.env.VITE_TODO_URL}/signin`,{
                email,
                password
            })
            const token = res.data.token
            localStorage.setItem("authToken", token)
            alert("sign in succesfully")
            navigate("/home")
        }
        catch(e){
            alert(e.response.data.msg)
        }
     }

    return(
        <div className="min-h-screen flex justify-center bg-[#101323] p-5 items-center">
            <div className="bg-[#171c33] p-10 mx-2 sm:mx-0 flex flex-col rounded-3xl w-[350px] sm:w-[400px]">
                <h1 className="text-3xl font-Ubuntu font-bold text-gray-400 mx-auto mb-5">Sign In</h1>

                <form onSubmit={userSignin} className="flex flex-col">
                    <p className="font-bold mb-2 text-gray-400">Email</p>
                    <input className="border border-gray-400 p-2 mb-5 rounded-lg text-gray-400" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" required/>

                    <p className="font-bold mb-2 text-gray-400">Password</p>
                    <input className="border border-gray-400 p-2 mb-5 rounded-lg text-gray-400" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" required/>

                    <button type="submit" className="bg-[#607AFB] hover:bg-gray-600 text-white p-2 rounded-lg">Sign in</button>
                </form>

                <p className="mt-3 mx-auto text-gray-400">If not have account?{' '}<button className="hover:text-gray-500 underline" onClick={() => navigate('/signup')}>Sign up</button></p>
            </div>
        </div>
    )
}