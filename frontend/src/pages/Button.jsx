import { useNavigate } from "react-router-dom"



export default function Button(){
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>navigate('/signin')}>Sign in</button>
        </div>
    )
}