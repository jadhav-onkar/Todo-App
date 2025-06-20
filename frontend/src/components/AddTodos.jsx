import { useState } from "react"
import axios from 'axios'


export default function Addtodos({refreshTodos}){
    const [todo, setTodo] = useState("")

    const addtodo = async(e) =>{
        e.preventDefault()
        const token = localStorage.getItem("authToken")
        try{
            const res = await axios.post(`${import.meta.env.VITE_TODO_URL}/todo`,{
                todo
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setTodo("")
            refreshTodos()
        }
        catch(e){
            alert(e.response.data.msg)
        }
    }

    const deleteall = async(e)=>{
         e.preventDefault()
        const token = localStorage.getItem("authToken")
        try{
            const res = await axios.delete(`${import.meta.env.VITE_TODO_URL}/todo/delete`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            alert("todo delete succesfully")
            refreshTodos()
        }
        catch(e){
            alert(e.response.data.msg)
        }
    }

    return(
        <div className="flex flex-col sticky py-5 top-0 mb-8 bg-[#101323] w-screen">
            <h1 className="text-3xl  font-Ubuntu font-bold text-white mx-auto mb-5">My Tasks</h1>
            <input className="border border-[#1E2443] mb-4 mx-auto bg-[#181D35] text-[#dadce6] rounded-lg p-2 w-[270px]" value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="write your tasks"/>
            <div className="flex justify-center">
                <button className=" p-2 rounded-lg font-Ubuntu bg-[#607AFB] hover:bg-[#51588a]  text-white border border-[#3E4E9F]" onClick={addtodo}>ADD</button>
                <button className=" p-2 ml-2 rounded-lg font-Ubuntu bg-[#21284A] hover:bg-[#34394f] text-white border border-[#1A1F39]" onClick={deleteall}>DELETE ALL</button>
            </div>
        </div>
    )
}