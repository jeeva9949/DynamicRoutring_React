import React,{ useEffect,useState } from "react"
import "./userdata.css"
import {Link} from "react-router-dom"

const URL= "https://jsonplaceholder.typicode.com/users"

const Userdata = () =>{
    const [data,setdata] = useState([])
    const [isloading,setloading] = useState(false)
    const [iserror,seterror] = useState({status:false,mesg:""})



    const  fetchinguserdata = async() =>{
        setloading(true);
        seterror({status:false,mesg:""})
        try{
            const response = await fetch(URL);
            const finaldata = await response.json();
            setdata(finaldata)
            setloading(false);
            seterror({status:false,mesg:""})

        }catch (error){
            setloading(false);
            seterror({status:true,mesg: "something went wrong || error.message"});


        }
    }

    useEffect(()=>{
        fetchinguserdata(URL)
    },[])

    if(isloading){
        return(
            <h3>Loading...</h3>
        )
    }

    if(iserror?.status){
        return(
            <h2>{iserror.mesg}</h2>
        )
    }
    return (
        <div className="container">
            {
                data.map((eachObj)=>{
                    const {id,name,email} =eachObj
                    return (
                        <div className="container" key ={id}>
                             <Link to ={`/user/${id}`}>
                               
                                    <h2>name:{name}</h2>
                                    <h3>email:{email}</h3>
                               
                            </Link>
                        </div>
                       
                    )
                })
            }
        </div>
    )
}
export default Userdata