import { useNavigate } from "react-router-dom"



export default function Button(){
    const navigate = useNavigate()
    return(
        <div className="h-screen bg-[#101323] flex flex-col justify-center items-center">
            <h1 className="text-4xl text-white mb-5 font-bold">Todo App</h1>
            <button className="shadow-[#607AFB] shadow-2xl text-2xl p-5 rounded-3xl bg-[#607AFB] text-white hover:text-white font-Ubuntu" onClick={()=>navigate('/signin')}>Sign in</button>
        </div>
    )
}