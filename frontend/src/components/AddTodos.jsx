import { useState } from "react"
import axios from 'axios'

export default function Addtodos({refreshTodos}){
    const [todo, setTodo] = useState("")

    const addtodo = async(e) =>{
        e.preventDefault()
        const token = localStorage.getItem("authToken")
        try{
            const res = await axios.post("http://localhost:3000/api/v1/todo",{
                todo
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            alert("todo addes succesfully")
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
            const res = await axios.delete("http://localhost:3000/api/v1/todo/delete",{
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
        <div className="flex">
            <input className="border border-gray-500 rounded-lg p-2" value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="write your tasks"/> <br />
            <button className=" p-2 ml-2 rounded-lg font-Ubuntu bg-green-600 hover:bg-green-700 hover:text-green-200 text-green-50 border border-green-800" onClick={addtodo}>ADD</button>
            <button className=" p-2 ml-2 rounded-lg font-Ubuntu bg-red-600 hover:bg-red-700 hover:text-red-200 text-red-50 border border-red-800" onClick={deleteall}>DELETE ALL</button>
        </div>
    )
}