import {useParams} from "react-router-dom"
import {Usersdata} from "./dataofusers"
import React from "react";


const Usedetails = () =>{
    console.log(Usersdata)
    const params  = useParams();
    console.log(useParams())

    
    const Userdatadetails = Usersdata.find((eachUser) =>{
       return (
        eachUser.id === params.userId
       )
    });


    console.log(Userdatadetails)
    return (
        <div>
            <h2>Userdatadetails</h2>
            <div><h3>name:{Userdatadetails.name}</h3></div>
            <div><h3>email:{Userdatadetails.email}</h3></div>
            <div><h3>phone:{Userdatadetails.phone}</h3></div>
       
        </div>
    )
}
export default Usedetails;