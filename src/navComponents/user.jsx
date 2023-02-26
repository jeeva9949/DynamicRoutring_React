import {Usersdata} from "./dataofusers"
import { Link } from "react-router-dom"
import "./userdata.css"


const Users = () =>{
    return(
        <div >
            <h2>users</h2>
            <div className="container">
                {Usersdata.map((eachobj)=>{
                    const {id,name,email} = eachobj;
                    return(
                        <div className= "card-container" key= {id}>
                            {/* <Link to={`/users/${id}`}> */}
                            <Link>
                              <h2>name:{name}</h2>
                              <h3>email:{email}</h3>
                            </Link>

                        </div>
                    )
                    })}
            </div>
        </div>
    )
}
export default Users