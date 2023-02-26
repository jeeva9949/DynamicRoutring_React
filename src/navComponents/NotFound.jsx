import {useNavigate} from "react-router-dom"
const NotFound = () =>{
    const Navigate = useNavigate()
    return(
        <div>
            <h1>404 data not found</h1>
            <button onClick={() =>{Navigate("/")}}>Home</button>
        </div>
    )
}
export default NotFound