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
            const res = await axios.post(`${import.meta.env.VITE_TODO_URL}/signup`,{
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
        <div className="min-h-screen flex justify-center bg-[#101323] p-5 items-center">
            <div className="bg-[#171c33] mx-2 sm:mx-0 p-10 flex flex-col rounded-3xl w-[350px] sm:w-[400px]">
                <h1 className="text-3xl font-Ubuntu font-bold text-gray-400 mx-auto mb-5">Sign Up</h1>

                <form onSubmit={userSignUp} className="flex flex-col">
                    <p className="font-bold mb-2 text-gray-400">Username</p>
                    <input className="border border-gray-400 p-2 mb-5 rounded-lg text-gray-400" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" required/>

                    <p className="font-bold mb-2 text-gray-400">Email</p>
                    <input className="border border-gray-400 p-2 mb-5 rounded-lg text-gray-400" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="abc@gmail.com" required/>

                    <p className="font-bold mb-2 text-gray-400">Password</p>
                    <input className="border border-gray-400 p-2 mb-5 rounded-lg text-gray-400" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" required/>

                    <button type="submit" className="bg-[#607AFB] hover:bg-gray-600 text-white p-2 rounded-lg">Sign up</button>
                </form>

                <p className="mt-3 mx-auto text-gray-400">If already have an account? <button className="hover:text-gray-500 underline"onClick={() => navigate('/signin')}>Sign in</button> </p>
            </div>
        </div>
    )
}