import {useNavigate} from "react-router-dom"
import React,{useState} from "react"
const Login = () =>{
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const[password,setpassword]=useState("")

    const navigate = useNavigate()
    return(
        <div style={{marginTop:"50px;"}}>
            <form>
                <div>
                    <label>name:</label>
                    <input type="text" name="name" id="name" value = {name}  onChange={(e)=>{
                        setname(e.target.value)
                    }}/>
                </div>
                <div>
                    <label>email:</label>
                    <input type="email" name="email" id="email"  value={email} onChange={(e)=>{
                        setemail(e.target.value)
                    }}/>
                </div>
                <div>
                    <label >password:</label>
                    <input type="password" name="password" id="password"  value={password} onChange={(e)=>{
                        setpassword(e.target.value)
                    }}/>
                </div>
                <div>
                    <button onClick={()=>{navigate("/sucess")}}>Submit</button>
                </div>
            </form>
        </div>
  
    )
}
export default Login