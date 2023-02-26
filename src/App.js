import Home from "./navComponents/Home";
import Login from "./navComponents/Login";
import Contact from "./navComponents/Contact";
import About from "./navComponents/About";
import Navbar from "./Navbar";
import Sucess from "./navComponents/sucess";
import NotFound from "./navComponents/NotFound";
import Project from "./navComponents/Projects";
import FutureProjects from "./navComponents/Futureproject";
import NewProjects from "./navComponents/Newproject";
import Users from "./navComponents/user";
import Userdetails from "./navComponents/userdetails";


// css app importing
import "./app.css"


import {Routes,Route} from "react-router-dom"



function App() {
  return (
    <div className="app1">
      <div><Navbar/></div>
      <div className="app2">
      <Routes>
        <Route path= "/" element= {<Home/>}/>
        <Route path = "/about" element= {<About/>}/>
        <Route path ="/contact" element = {<Contact/>}  />
        <Route  path ="/login" element = {<Login/>} />
        <Route path= "/sucess" element = {<Sucess/>} />

        <Route path="/project" element= {<Project/>}>
          <Route path="futureproject" element= {<FutureProjects/>}/>
          <Route path="newprojects" element = {<NewProjects/>}/>
        </Route>

       <Route path="/users" element= {<Users/>} />

        <Route path="/users/:userId" element={<Userdetails/>}/> 
        
        <Route path = "*" element=  {<NotFound/>} /> 
      </Routes>
      </div>
      

    </div>
  );
}

export default App;
