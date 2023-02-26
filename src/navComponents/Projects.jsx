import {Link,Outlet} from "react-router-dom";
import React from "react";

const Project = () =>{
    return(
        <div>
            <h2>project componenet</h2>
            <nav style={{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"2rem",fontSize:"1.4rem",}}>
                <Link to={"/project/futureproject/"}>FutureProjects</Link>
                <Link to={"/project/newprojects"}>newprojects</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Project 