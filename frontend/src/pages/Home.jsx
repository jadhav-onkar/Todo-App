import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import RenderTodo from "../components/RenderTodos"
import Addtodos from "../components/AddTodos"

export default function Home(){
    const [todos, setTodos] = useState([])

    async function getTodos(){
            const token = localStorage.getItem("authToken")
            const res = await axios.get("http://localhost:3000/api/v1/todo",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setTodos(res.data.todos)
        }

    useEffect(()=>{
        getTodos()
    },[])


    return(

        <div>
            <Addtodos refreshTodos={getTodos} />
            {todos.map(todo => (
                    <RenderTodo key={todo._id} todoId={todo._id} td={todo.todo} completed={todo.completed} refreshtodos={getTodos} />
                ))}
        </div>
    )
}



