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
        <div>
            <p>Username</p>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="username" />

            <p>Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="abc@gmail.com" />

            <p>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="pass123" /> <br />

            <button onClick={userSignUp}>Sign up</button>
            <p>if already have account? <button onClick={()=>navigate('/signin')}>sign in</button></p>

        </div>
    )
}