import {NavLink} from "react-router-dom";
import "./navbar.css"
import "./app.css"

const Navbar = () =>{
    return(
        <div className="App">
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/about">About</NavLink>
            <NavLink to = "/contact">Contact</NavLink>
            <NavLink to ="/project" >Project</NavLink>
            <NavLink to ="/users" >Users</NavLink> 
            <NavLink to= "/login">Login</NavLink>
        </div>

    )
}

export default Navbar