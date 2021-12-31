import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Register(){
    const [user , setUser]=useState("")
    const [email , setEmail]=useState("")
    const [passWord , setPassword]=useState("")
  
const registerNow=(e)=>{
   e.preventDefault();
    console.log("reg")
const bodyuser={
    //es6
    user,email,passWord
}
    axios
    .post('http://localhost:5000/user/register', bodyuser)
    .then((respones)=>{
   
      console.log('DATA', respones.data);
    })
    .catch((err)=>{
      console.log('ERR', err);
    });
    
};
return(
    <div className="Regsiter">
        <form>
            <label  htmlFor="username">Username:</label>
        <input type="text" placeholder="username:ABCD"  
        onChange={(e)=>{
            setUser(e.target.value)
        }} value={user}/>
     
        <br/>
        <label htmlFor="Email">Email:</label>
        <input type="text" placeholder="email:sseerr@mail.com" 
        onChange={(e)=>{
            setEmail(e.target.value)
        }} value={email}/>
       
        <br/>
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="password:*******" 
        onChange={(e)=>{
            setPassword(e.target.value)
        }} value={passWord}/>
      
        <br/>
    <input type="submit" value="Register" onClick={registerNow} className="btn btn-outline-warning"/>
   
        </form>
        <Link to='Add' >Add</Link>
        </div>
)
}