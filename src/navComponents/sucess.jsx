


import {useNavigate}  from "react-router-dom"

const Sucess = () =>{
    const navigate = useNavigate()
    return(
        <div>
              <h2>successfully submited</h2>
              <button onClick={()=>{navigate("/")}}>Home</button>
        </div>
      
    )
}
export default Sucess