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
        <div>
            <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="write your tasks"/> <br />
            <button onClick={addtodo}>Add</button>
            <button onClick={deleteall}>delete all</button>
        </div>
    )
}